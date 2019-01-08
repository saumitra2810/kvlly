import React from 'react'

const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#fff',
  outline: 'none',
  padding: '12px 60px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: 'rgb(255, 178, 56)',
  border: 'none',
  borderRadius: '6px',
  letterSpacing: '1.5px',
  marginBottom: '20px',
}

const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    console.log(process.env.GATSBY_STRIPE_API_KEY)
    this.stripe = window.Stripe(String(process.env.GATSBY_STRIPE_API_KEY), {
      betas: ['checkout_beta_4'],
    })
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: 'sku_EIoJtNH2tOF2bg', quantity: 1 }],
      successUrl: `http://localhost:8000/thanks/`,
      cancelUrl: `http://localhost:8000/`,
    })

    if (error) {
      console.warn('Error:', error)
    }
  }

  render() {
    return (
      <button
        style={buttonStyles}
        onClick={event => this.redirectToCheckout(event)}
      >
        BUY ME COFFEE
      </button>
    )
  }
}

export default Checkout
