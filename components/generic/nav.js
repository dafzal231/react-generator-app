import React from 'react'
import Link from 'next/link';
import "./globals.css";

const Nav = () => {
    return (
        <header>
            <div className = "main-link">
            <Link href="/"> </Link>
            </div>

            <nav className = "main-nav">
                <li className = "dashboard">
                    <Link href = "/dashboard"> Dashboard </Link>
                </li>

                <li className = "components">
                    <Link href = "/components" > Components </Link>
                </li>

                <li className = "forms">
                    <Link href = "/forms"> Forms </Link>
                </li>
            </nav>
        </header>
    )
}

export default Nav;

