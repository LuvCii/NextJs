import React from 'react'
import { LayoutProps } from '../../models/layout'


// type LayoutProps = {
//     children: React.ReactNode
// }

const LayoutEmpty = ({ children }: LayoutProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default LayoutEmpty