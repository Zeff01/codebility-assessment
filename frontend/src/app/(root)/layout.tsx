import React from 'react'
import NavBar from '../components/NavBar'
import SearchBar from "../components/SearchBar";
import Footer from '../components/Footer';


export default function Layout  ({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <main>
        <NavBar />
        <SearchBar />
        {children}
        <Footer/>
    </main>
  )
}

