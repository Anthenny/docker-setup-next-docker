'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const page = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    setCart(cart);
  }, []);

  const calculateTotalPrice = (cart) => {
    const total = cart?.reduce((total, item) => total + item.packagePrice * item.packageAmount, 0);
    return total?.toFixed(2); // Altijd met 2 decimalen formatteren
  };

  useEffect(() => {
    const calculatedTotalPrice = calculateTotalPrice(cart);
    setTotalPrice(calculatedTotalPrice);
  }, [cart]);

  const handleIncreaseQuantity = (item) => {
    item.packageAmount += 1;
    setCart([...cart]);
  };

  const handleDecreaseQuantity = (item) => {
    if (item.packageAmount > 1) {
      item.packageAmount -= 1;
      setCart([...cart]);
    }
  };
  return (
    <div className="right__col">
      <h3>Bestelling gegevens</h3>

      {cart ? (
        <div className="col">
          {cart.map((cartItem, key) => {
            return (
              <div className="top__col" key={key}>
                <div className="cols">
                  <div className="tcol">
                    <h4>Combi deal</h4>
                    <span>{cartItem.packageTarget}</span>
                    <p>${cartItem.packagePrice}</p>
                  </div>
                  <div className="amount__col">
                    <span onClick={() => handleIncreaseQuantity(cartItem)}>+</span>
                    <p>{cartItem.packageAmount}</p>
                    <span onClick={() => handleDecreaseQuantity(cartItem)}>-</span>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="bottom__col">
            <div>
              <p>Totaal</p>
              <p>${totalPrice}</p>
            </div>
            <p>Bestelling afronden</p>
          </div>
        </div>
      ) : (
        <div className="col">
          <div className="emptyCart">
            <p>Je hebt geen pakket gekeuzen</p>
            <Link href={'/paketten'}>
              <div className="button">
                <p>Kies een pakket</p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
