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