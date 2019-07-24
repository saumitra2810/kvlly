import React from 'react'
import PropTypes from 'prop-types'
import { navigate, StaticQuery, graphql } from 'gatsby'
import ShopContext, { defaultStoreContext } from './shopcontext'

import Header from './header'
import Footer from './footer'
import './layout.scss'
import './shop.scss'

class Layout extends React.Component {
  state = {
    store: {
      ...defaultStoreContext,
      addVariantToCart: (variantId, quantity) => {
        if (variantId === '' || !quantity) {
          console.error('Both a size and quantity are required.')
          return
        }

        if (this._isMounted) {
          this.setState(state => ({
            store: {
              ...state.store,
              adding: true,
            },
          }))
        }

        const { checkout, client } = this.state.store
        const checkoutId = checkout.id
        const lineItemsToUpdate = [
          { variantId, quantity: parseInt(quantity, 10) },
        ]

        return client.checkout
          .addLineItems(checkoutId, lineItemsToUpdate)
          .then(checkout => {
            // console.log(checkout.lineItems)
            if (this._isMounted) {
              this.setState(state => ({
                store: {
                  ...state.store,
                  checkout,
                  adding: false,
                  hidden: false,
                },
              }))
            }
          })
          .then(() => {
            navigate('/cart')
          })
      },
      removeLineItem: (client, checkoutID, lineItemID) => {
        return client.checkout
          .removeLineItems(checkoutID, [lineItemID])
          .then(res => {
            if (this._isMounted) {
              console.log(res)
              this.setState(state => ({
                store: {
                  ...state.store,
                  checkout: res,
                  hidden: false,
                },
              }))
            }
          })
      },
      updateLineItem: (client, checkoutID, lineItemID, quantity) => {
        const lineItemsToUpdate = [
          { id: lineItemID, quantity: parseInt(quantity, 10) },
        ]

        return client.checkout
          .updateLineItems(checkoutID, lineItemsToUpdate)
          .then(res => {
            if (this._isMounted) {
              this.setState(state => ({
                store: {
                  ...state.store,
                  hidden: false,
                  checkout: res,
                },
              }))
            }
          })
      },
    },
  }

  async initializeCheckout() {
    // Check for an existing cart.
    const isBrowser = typeof window !== 'undefined'
    const existingCheckoutID = isBrowser
      ? localStorage.getItem('shopify_checkout_id')
      : null

    const setCheckoutInState = checkout => {
      if (isBrowser) {
        localStorage.setItem('shopify_checkout_id', checkout.id)
      }

      if (this._isMounted) {
        this.setState(state => ({
          store: {
            ...state.store,
            checkout,
          },
        }))
      }
    }

    const createNewCheckout = () => this.state.store.client.checkout.create()
    const fetchCheckout = id => this.state.store.client.checkout.fetch(id)

    if (existingCheckoutID) {
      try {
        const checkout = await fetchCheckout(existingCheckoutID)

        // Make sure this cart hasn’t already been purchased.
        if (!checkout.completedAt) {
          setCheckoutInState(checkout)
          return
        }
      } catch (e) {
        localStorage.setItem('shopify_checkout_id', null)
      }
    }

    const newCheckout = await createNewCheckout()
    setCheckoutInState(newCheckout)
  }

  componentDidMount() {
    this._isMounted = true
    this.initializeCheckout()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState.store.checkout.lineItems)
    if (this.state.store.checkout.lineItems.length > 0) {
      console.log(this.state.store.checkout)
    }
    // console.log(this)
    // console.log(this.state.store.checkout.lineItems)
  }

  render() {
    const { children } = this.props
    return (
      <ShopContext.Provider value={this.state.store}>
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
            <>
              <Header siteTitle={data.site.siteMetadata.title} />
              <div
                style={{
                  margin: `0 auto`,
                  maxWidth: 960,
                  padding: `0px 1.0875rem 1.45rem`,
                  paddingTop: 0,
                }}
              >
                {children}
              </div>
              <Footer />
            </>
          )}
        />
      </ShopContext.Provider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
