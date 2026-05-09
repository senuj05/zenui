import React from 'react';
import './Toggle.css';

type ToggleVariant = 'default'

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement>{
    variant?: ToggleVariant;
}

export function Toggle ({
    variant = 'default',
    ...props
}: ToggleProps) {
    return (
        <label className={`toggle toggle-${variant}`}>
            <input type="toggle" {...props} />
            <span className="slider"></span>
        </label>
    )       
}