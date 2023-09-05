// useShoppingCart.js

import { useState, useEffect } from 'react';

export function useShoppingCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Haal de huidige inhoud van de winkelwagen op uit localStorage bij het initialiseren
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(existingCart);
  }, []);

  const addToCart = (packagedata) => {
    // Zoek het pakket in de winkelwagen op basis van een unieke sleutel (bijv. packagedataKey)
    const existingPackage = cart.find((item) => item.packagedataKey === packagedata.packagedataKey);

    if (existingPackage) {
      // Als het pakket al in de winkelwagen zit, verhoog packageAmount met +1
      existingPackage.packageAmount += 1;
    } else {
      // Anders voeg het pakket toe met een initiële packageAmount van 1
      setCart([...cart, packagedata]);
    }
  };

  // Verwijder een pakket uit de winkelwagen
  const removeFromCart = (packagedataKey) => {
    const updatedCart = cart.filter((item) => item.packagedataKey !== packagedataKey);
    setCart(updatedCart);
  };

  useEffect(() => {
    // Sla de bijgewerkte winkelwagen terug op in localStorage wanneer deze verandert
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return { cart, addToCart, removeFromCart };
}
