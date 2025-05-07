import React from 'react'

export default function layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <div>Estoy en el blog</div>
            {children}
        </div>
    )
}
