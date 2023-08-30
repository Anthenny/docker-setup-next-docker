'use client';

import { React, useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Link from 'next/link';

import facebookIcon from '../../../public/icon/facebook.png';
import instagramIcon from '../../../public/icon/instagram.png';

const page = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
  };
  return (
    <div className="fullNavColor FwNav">
      <div className="container">
        <nav className="cNav">
          <Link href={'/'}>
            <div className="logo">
              <Image src={Logo} alt="Logo" height={80} />
            </div>
          </Link>

          <div className="burgerMenu" onClick={toggleMenu}>
            <p>Menu</p>
            <div className="burgerButton">
              <span />
              <span />
              <span />
            </div>
          </div>
          <ul className="right__col ">
            <li className="nav_link ">
              <Link href={'/'}>HOME</Link>
            </li>
            <li className="nav_link ">
              <Link href={'/'}>OVER</Link>
            </li>
            <li className="nav_link ">
              <Link href={'/paketten'}>PRICING</Link>
            </li>
            <li className="nav_link nav_link_active">
              <Link href={'/'}>CONTACT</Link>
            </li>
          </ul>
        </nav>
        {menuVisible && (
          <div className="menu">
            <div className="closeButton" onClick={toggleMenu} />

            <div class="x-container">
              <div class="x"></div>
            </div>
            <ul>
              <li>
                <Link href={'/'}>HOME</Link>
              </li>
              <li>
                <Link href={'/'}>OVER</Link>
              </li>
              <li>
                <Link href={'/paketten'}>PRICING</Link>
              </li>
              <li>
                <Image src={facebookIcon} width={50} height={50} alt="icon instagram" />
                <Image src={instagramIcon} width={50} height={50} alt="icon instagram" />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
