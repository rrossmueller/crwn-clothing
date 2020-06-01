import React from 'react';
import {connect} from 'react-redux';

import {addItem, clearItemFromCart, removeItem} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({item, addItem, removeItem, clearItem}) => {
  const {imageUrl, name, quantity, price} = item;
  return (
      <div className='checkout-item'>
        <div className='image-container'>
          <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
          <div className='arrow' onClick={() => removeItem(item)}>&#x276E;</div>
          <span className='value'>{quantity}</span>
          <div className='arrow' onClick={() => addItem(item)}>&#x276F;</div>
        </span>
        <span className='price'>${price}</span>
        <div className='remove-button' onClick={() => clearItem(item)}>&#x2715;</div>
      </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
