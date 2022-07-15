import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className="bg-blue-600 py-5 ">
            <div  >
                <ul className="text-white text-base flex justify-center ">
                    <li className="px-4 hover:underline ease-in-out"><Link href="/">Home</Link></li>
                    <li className="px-4 hover:underline ease-in-out"><Link href="/about">About</Link></li>
                    <li className="px-4 hover:underline ease-in-out"><Link href="/products">Product</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header