import React from 'react'
import Link from 'next/link';
import "./globals.css";
import { navBar } from "/constants/index.js";

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                {navBar.map((link) => (
                    <li key={navBar.id}>
                        <Link href={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;

