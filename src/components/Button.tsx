import React from 'react'
import style from './Button.module.scss'

interface Props {
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
    children?: React.ReactNode
}

const Button: React.FC<Props> = ({type, onClick, children}) => {

    return (
        <button
            onClick={onClick}
            type={type}
            className={style.botao}
        >
            {children}
        </button>
    )
}

export default Button