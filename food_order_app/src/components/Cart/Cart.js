import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const CartCTX = useContext(CartContext);

  const totalAmount = `$${CartCTX.totalAmount.toFixed(2)}`;
  const hasItems = CartCTX.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    CartCTX.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    CartCTX.addItem({...item, amount: 1});
  };
  
  const cartItems = <ul className={classes['cart-items']}>
      {CartCTX.items.map((item) => 
      <CartItem 
        key={item.id} 
        name={item.name} 
        price={item.price} 
        amount={item.amount} 
        onAdd={cartItemAddHandler.bind(null, item)}
        onRemove={cartItemRemoveHandler.bind(null, item.id)} 
        />
      )}
    </ul>;

  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
  )
}

export default Cart