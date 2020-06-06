import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51GqzplJlNE45hktsUDnohS3i79qpqfTWLGDcydMhv8OXr77IiqyMLpWWKbJnOVM93NpBjIBl12TFyepZ5p82a1cc009gQO3vAH';
  const onToken = token => {
    console.log(token);
    alert('Payment successful');
  };
  return (
      <StripeCheckout
          label='Pay Now'
          name='CRWN Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
      />
  );
};

export default StripeCheckoutButton;
