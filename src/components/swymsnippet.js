import React from 'react';
const PROVIDER_ID = "m3AjodV+Ur7mQyrPWfXYOYjUzDjIkJFpJ3Q4vZ3i7ao=";
const SCRIPT_TAG = "https://swymdev.azureedge.net/code/swym-notepad-v2-shopify.js";
const swappName = "Wishlist";
const swymJSObject = {
  pid: PROVIDER_ID,
  interface: "/apps/swym" + swappName + "/interfaces/interfaceStore.php?appname=" + swappName
};

function swymJSShopifyLoad(){
  swymPageLoad();
  if(!window._swat) {
    (function (s, w, r, e, l, a, y) {
      r['SwymRetailerConfig'] = s;
      r[s] = r[s] || function (k, v) {
        r[s][k] = v;
      };
    })('_swrc', '', window);
    window._swrc('RetailerId', swymJSObject.pid);
    window._swrc('Callback', function(){
      if(window.initSwymShopify){
        window.initSwymShopify();
      }
    });
  }else if(window._swat.postLoader){
    window._swrc = window._swat.postLoader;
    window._swrc('RetailerId', swymJSObject.pid);
    window._swrc('Callback', function(){
      if(window.initSwymShopify){
        window.initSwymShopify();
      }
    });
  }else{
    if(window.initSwymShopify){
      window.initSwymShopify();
    }
  }

  function swymCallbackFn(){
    if(window.location.href.indexOf("localhost") !== -1){
      window._swat.storage.primaryDomain = "";
    }
  }
  if(!window.SwymCallbacks){
   window.SwymCallbacks = [];
  }
  window.SwymCallbacks.push(swymCallbackFn);
}

function swymPageLoad(){
  window.SwymProductVariants = window.SwymProductVariants || {};
  window.SwymHasCartItems = 0;
  window.SwymPageData = {};
  window.SwymProductInfo = {};
  window.SwymPageData = {et: 0};
  window.swymCart = {};
}

class SwymSnippet extends React.Component {

  componentDidMount () {
    const script = document.createElement("script");
    script.src = SCRIPT_TAG;
    script.async = true;
    document.getElementById("swym-snippet").appendChild(script);
  }
  render(){
    swymJSShopifyLoad();
    return (
      <div id="swym-snippet">

      </div>
    );
  }
}

export default SwymSnippet;
