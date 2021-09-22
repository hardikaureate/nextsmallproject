import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div>
            <ul className="Linking">
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="/blog"><a>Blog</a></Link></li>
                <li><Link href="/blog/blog1"><a>Career</a></Link></li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
        </div>
    )
}

export default Navbar
