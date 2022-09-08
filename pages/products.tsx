import React from 'react'
import { NextPage } from "next";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import StorageFarmer from '../components/Product/StorageFarmer';
import PreservatorTraders from '../components/Product/PreservatorTraders';
import Preservator from '../components/Product/Preservator';

const products: NextPage = () => {
  return (
    <div>
        <NavBar />
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white p-4">
            <StorageFarmer/>
            <PreservatorTraders/>
            <Preservator/>
            
        </div>
        <Footer />
    </div>
  )
}

export default products