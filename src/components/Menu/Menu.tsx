import React from 'react';
import './Menu.css';

interface MenuProps {
    items: string[];
    onSelect: (item: string) => void;
}

export function Menu({ items, onSelect }: MenuProps) {
    return (
        <ul className="menu">
            {items.map((item) => (
                <li key={item} onClick={() => onSelect(item)} className="menu-item">
                    {item}
                </li>
                
            ))}
        </ul>
    );
}