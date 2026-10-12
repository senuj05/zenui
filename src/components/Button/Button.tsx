import React from 'react';
import './Button.css';

type ButtonVariant =
                     'default' |
                     'secondary'| 
                     'outline'|
                     'ghost'|
                     'destructive'|
                     'destructive-ghost'|
                     'inverse'|
                     'outline-inverse'|
                     'ghost-inverse'
type ButtonSize = 'small' | 'medium' | 'large'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: React.ReactNode;      
}

export function Button({
    variant = 'default',
    size = 'medium',
    type = 'button',
    children,
    ...props
}: ButtonProps) {
    return (
        <button
        className="button"
        type={type}
        data-variant={variant}
        data-size={size}
        {...props}
        >
        {children}
        </button>
    )
}