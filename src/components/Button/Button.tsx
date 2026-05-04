import React from 'react';

import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'small' | 'medium' | 'large'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: React.ReactNode;      
}

export function Button({
    variant = 'primary',
    size = 'medium',
    children,
    ...props
}: ButtonProps) {
    return (
        <button
        data-variant={variant}
        data-size={size}
        {...props}
        >
        {children}
        </button>
    )
}