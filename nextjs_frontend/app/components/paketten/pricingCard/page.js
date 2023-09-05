import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import vinkje1 from '@/../../public/icon/vinkje1.png';
import vinkje2 from '@/../../public/icon/vinkje2.png';

const page = ({ active, packagedata }) => {
  const addToCart = () => {
    // Controleer of de winkelwagen al in localStorage bestaat
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Zoek het pakket in de winkelwagen op basis van een unieke sleutel (bijv. packagedata.key)
    const existingPackageIndex = cart.findIndex((item) => item.packagedataKey === packagedata.key);

    if (existingPackageIndex !== -1) {
      // Als het pakket al in de winkelwagen zit, controleer het abonnementstype
      const existingPackage = cart[existingPackageIndex];
      if (existingPackage.packageYearly !== packagedata.packageYearly) {
        // Als het bestaande pakkettype verschilt van de nieuwe keuze, update het pakkettype
        existingPackage.packageYearly = packagedata.packageYearly;
        // Pas de prijs aan op basis van het nieuwe pakkettype
        existingPackage.packagePrice = packagedata.packageYearly
          ? packagedata.packageYearlyPrice
          : packagedata.packageMonthlyPrice;
        // Reset de hoeveelheid naar 1
        existingPackage.packageAmount = 1;
      } else {
        // Als het bestaande pakkettype hetzelfde is als de nieuwe keuze, verhoog het packageAmount met +1
        existingPackage.packageAmount += 1;
      }
    } else {
      // Anders voeg het pakket toe met een initiële packageAmount van 1
      const localPackageData = {
        packagedataKey: packagedata.key,
        packagedataNaam: packagedata.packageNaam,
        packageTarget: packagedata.packageTarget,
        packagePrice: packagedata.packageYearly
          ? packagedata.packageYearlyPrice
          : packagedata.packageMonthlyPrice,
        packageYearly: packagedata.packageYearly,
        packageAmount: 1, // Initiële packageAmount
      };

      cart.push(localPackageData);
    }

    // Sla de bijgewerkte winkelwagen terug op in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div className={`pricingCard ${active && 'active'}`}>
      <h3>{packagedata.packageNaam}</h3>
      <p>
        <span>
          {packagedata.packageYearly
            ? packagedata.packageYearlyPrice
            : packagedata.packageMonthlyPrice}
        </span>{' '}
        / per maand
      </p>
      <ul>
        {packagedata.packageList.map((list, index) => {
          return (
            <li key={index}>
              <span>
                <Image src={active ? vinkje1 : vinkje2} width={20} height={20} alt="vinkje icon" />
              </span>
              {list}
            </li>
          );
        })}
      </ul>
      <div onClick={addToCart} className={`priceButton ${active && 'priceButton__active'}`}>
        <Link href={'/vragen'}>
          <p>Vul paar vragen in</p>
        </Link>
      </div>
    </div>
  );
};

export default page;
