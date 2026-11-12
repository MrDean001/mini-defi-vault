"use client";

import Link from "next/link";
import WalletConnect from "./Walletconnect";

export default function NavBar(){
    return (
        <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
          <div className="mx-auto flex max-w-7xl items-center jutify-between px-6 py-4">
    {/* Logo */}
    <Link href="/" className="text-2xl font-bold text-blue-600">
    Mini Defi Vault
    </Link> 

    {/* Navigation Links*/}
    <div className="hidden items-center gap-8 md:flex">
        <Link href="/" className="transition hover:text-blue-600">
        Dashboard
        </Link>
        <a href = "#deposit" className="transition hover:text-blue-600">
            Deposit
        </a>
        <a href="#withdraw" className="transition hover:text-blue-600">
            Withdraw
        </a>
        <a href="#history" className="transition hover:text-blue-600">
            History
        </a>
    </div>

    {/* Wallet Button */}
    <WalletConnect />
          </div> 
            </nav>
    );
}