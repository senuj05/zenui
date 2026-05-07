import React from "react";
import './Badge.css';

type BadgeVariant = 'default' |
                    'secondary'|
                    'success'|
                    'warning'|
                    'outline' |
                    'error'

interface BadgeProps extends React.BadgeHTMLAttributes<HTMLBadgeElement>{
    variant?: BadgeVariant;
    children: React.ReactNode;      
}

export function Badge({
    variant = 'default',
    children,
    ...props
}: BadgeProps) {
    return (
        <badge
        data-variant={variant}
        {...props}
        >
        {children}
        </badge>
    )       
}