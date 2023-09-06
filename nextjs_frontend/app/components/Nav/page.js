'use client';

import { React, useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Link from 'next/link';

const page = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
  };
  return (
    <>
      <div className="menuwrapper2">
        <div className="fullwidth fwTestNav">
          <div className="container cTestNav">
            <div className="navbarTest">
              <Link href={'/'} className="left__col">
                <Image src={Logo} alt="Logo" height={80} />
              </Link>

              <ul className="right__col">
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
                  <Link href={'/'}>CONTACT</Link>
                </li>
              </ul>

              <div
                className={`menu__toggler  ${menuVisible ? '__active' : ''}`}
                onClick={toggleMenu}
              >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile__menu-test ${menuVisible ? '__active' : ''}`}>
        <ul>
          <li className="list__layer">
            <div className="first__layer">
              <Link href={'/'} className="">
                <span>HOME</span>
              </Link>
            </div>
          </li>
          <li className="list__layer">
            <div className="first__layer">
              <Link href={'/'} className="">
                <span>OVER</span>
              </Link>
            </div>
          </li>
          <li className="list__layer">
            <div className="first__layer">
              <Link href={'/'} className="">
                <span>PRICING</span>
              </Link>
            </div>
          </li>
          <li className="list__layer">
            <div className="first__layer">
              <Link href={'/'} className="">
                <span>CONTACT</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default page;
