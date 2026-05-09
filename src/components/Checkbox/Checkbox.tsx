import React from  'react';
import './Checkbox.css';

type CheckboxVariant = 'default' | 
                      'round' 

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement>{
    variant?: CheckboxVariant;
    children: React.ReactNode;      
}

export function Checkbox({
    variant = 'default',
    children,
    ...props
}: CheckboxProps) {
    return (
        <label data-variant={variant} className="checkbox-container">
            <input type="checkbox" {...props} />
            <span className="checkmark"></span>
            {children}
        </label>    
    )
}