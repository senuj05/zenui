import React from 'react';
import './Banner.css';

type BannerVariant = 'info'
                    | 'success'
                    | 'warning'
                    | 'error';

interface BannerProps extends React.BannerHTMLAttributes<HTMLDivElement> {
    variant?: BannerVariant;
    children: React.ReactNode;
}

export function Banner({
    variant = 'info',
    children,
    ...props
}: BannerProps) {
    return (
        <div
        className='banner'
        data-variant={variant}
        {...props}
        >
        {children}
        </div>
    )
}