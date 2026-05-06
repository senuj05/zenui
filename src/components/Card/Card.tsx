import React from 'react';
import './Card.css';
import { Button } from '../Button';

type CardVariant = 'default' | 
                    'media-card'|
                    'card-buttons' |
                    'card-list'

interface CardProps extends React.HTMLAttributes<HTMLButtonElement>{
    variant?: CardVariant;
    subtitle?: string;
    title?: string;
    content?: string;
    image?: string;
    items?: Array<{ image: string; label: string }>;
}

export function Card({
    variant,
    subtitle,
    title,
    content,
    image,
    items,
    ...props
}: CardProps) {
    return (
        <div
        className ="card"
        data-variant={variant}
        >
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        {title && <h3 className="card-title">{title}</h3>}
        {content && <p className="card-content">{content}</p>}
        {items && (
            <ul className="card-list">
                {items.map((item, index) => (
                    <li key={index} className="card-list-item">
                        <img src={item.image} alt={item.label} className="card-list-item-image" />
                        <span className="card-list-item-label">{item.label}</span>
                    </li>
                ))}
            </ul>
        )}
        {image && <img src={image} alt="Card image" className="card-image" />}
        {Button && variant === 'card-buttons' && (
            <div className="card-buttons">
                <Button variant='default'>Submit</Button>
            </div>
        )}
        </div>
    )
}