import React, { useId } from 'react';
import './Input.css';

type InputSize = 'sm' | 'md' | 'lg'

// Native `size` is a character count; ours is a visual size, so replace it.
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Visible label. Required: placeholders are not a substitute for labels. */
    label: string;
    /** Helper text shown under the input. */
    hint?: string;
    /** Error message. Replaces the hint and marks the input invalid. */
    error?: string;
    size?: InputSize;
}

export function Input({
    label,
    hint,
    error,
    size = 'md',
    id,
    ...props
}: InputProps) {
    // Each input needs a unique id so the label and messages can point at it.
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const messageId = `${inputId}-message`;
    const message = error ?? hint;

    return (
        <div className="input-wrapper">
            <label className="input-label" htmlFor={inputId}>
                {label}
            </label>
            <input
                className="input"
                id={inputId}
                data-size={size}
                aria-invalid={error ? true : undefined}
                aria-describedby={message ? messageId : undefined}
                {...props}
            />
            {message && (
                <p
                    id={messageId}
                    className={error ? 'input-hint input-hint--error' : 'input-hint'}
                >
                    {message}
                </p>
            )}
        </div>
    )
}
