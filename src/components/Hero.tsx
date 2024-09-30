import React from 'react'
import Image from 'next/image'
import logo from "../../public/images/logo.png"
export default function Hero () {
  return (
    <>
        <div className='bg-white min-h-screen flex flex-col items-center justify-center'>
            <Image src={logo} alt="logo" />
            <h1 className='text-5xl text-slate-900 text-center m-10 font-bold'>Welcome to Microsoft LSA Nexus Chapter</h1>
        </div>
    </>
  )
}

