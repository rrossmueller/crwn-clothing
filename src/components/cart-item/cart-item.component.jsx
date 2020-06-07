import React from 'react';

import {CartItemContainer, CartItemImage, ItemDetailsContainer} from './cart-item.styles';

const CartItem = ({item: {imageUrl, name, quantity, price}}) => (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt='item'/>
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;
