import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <ul>
                <li><Link href="">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/products">Product</Link></li>
            </ul>
        </div>
    )
}

export default Header