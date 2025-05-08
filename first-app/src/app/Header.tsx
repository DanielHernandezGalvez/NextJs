import React from 'react'

interface IPropsHeader {
    titulo: string,
    background: string,
}

export default function Header({ titulo, background }: IPropsHeader) {
    const clases = `${background} text-center py-3`
  return (
    <div className={clases}>
      <h1 className="text-2xl text-white">{titulo}</h1>
    </div>
  )
}
