import React from 'react';
import './Dropdown.css';

type DropdownVariant =
    'default' 


interface DropdownItem {
    label: string;
    content : string;
}

interface DropdownProps {
    items: DropdownItem[];
}

export function Dropdown({ items }: DropdownProps) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    function toggle(index: number) {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <div className="dropdown">
            {items.map((item, index) => (
                <div key={index} className="dropdown-item" data-open={openIndex === index}>
                    <button className="dropdown-trigger" onClick={() => toggle(index)}>
                        <span>{item.label}</span>
                        <span className="dropdown-chevron">{openIndex === index ? '∧' : '∨'}</span>
                    </button>
                    {openIndex === index && (
                        <div className="dropdown-content">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
}
