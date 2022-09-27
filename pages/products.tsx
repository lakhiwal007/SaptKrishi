import React from 'react'
import { NextPage } from "next";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SabjiKothi from '../components/Product/SabjiKothi';
import NanoKawach from '../components/Product/NanoKawach';
import SabjiKothiECart from '../components/Product/SabjiKothiECart';
import SabjiKothiCart from '../components/Product/SabjiKothiCart';

const products: NextPage = () => {
  return (
    <div>
        <NavBar />
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white p-4">
            <SabjiKothi/>
            <SabjiKothiCart/>
            <SabjiKothiECart/>
            <NanoKawach/>
        </div>
        <Footer />
    </div>
  )
}

export default products