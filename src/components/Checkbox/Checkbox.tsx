import React from  'react';
import './Checkbox.css';

type CheckboxVarint = 'default' | 
                      'round' 

interface ButtonProps extends React.CheckboxHTMLAttributes<HTMLCheckboxElement>{
    variant?: CheckboxVarint;
    children: React.ReactNode;      
}

export function Checkbox({
    variant = 'default',
    children,
    ...props
}: ButtonProps) {
    return (
        <label data-variant={variant} className="checkbox-container">
            <input type="checkbox" {...props} />
            <span className="checkmark"></span>
            {children}
        </label>    
    )
}