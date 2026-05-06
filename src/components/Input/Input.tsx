import React from 'react';
import './Input.css';

type InputVariant = 'default'|
                    'placeholder' |
                    'with-value' |
                    'readonly'|
                    'disabled' 
   

interface InputProps extends React. InputHTMLAttributes<HTMLInputElement>{
    variant?: InputVariant;
    
}

export function Input({
    variant = 'default',
    ...props
}: InputProps){
    return (
        <input 
            className={`input input--${variant}`} 
            {...props}
        />
    )   

}