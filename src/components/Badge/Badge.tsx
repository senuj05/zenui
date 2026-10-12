import React from "react";
import './Badge.css';

type BadgeVariant = 'default' |
                    'secondary'|
                    'success'|
                    'warning'|
                    'outline' |
                    'error'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>{
    variant?: BadgeVariant;
    children: React.ReactNode;      
}

export function Badge({
    variant = 'default',
    children,
    ...props
}: BadgeProps) {
    return (
        <span
        className='badge'
        data-variant={variant}
        {...props}
        >
        {children}
        </span>
    )       
}