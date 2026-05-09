import React from 'react';
import './Avatar.css';
import userIcon from './assets/user-icon.png';

type AvatarSize = 'small' | 'medium' | 'large';

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    size?: AvatarSize;
    src?: string;
    alt?: string;
}

export function Avatar({ size = 'medium', src, alt, ...props }: AvatarProps) {
    return (
        <div className="avatar" data-size={size}>
            {src
                ? <img src={src} alt={alt} />
                : <img src={userIcon} alt="avatar" className="avatar-fallback-icon" />
            }
        </div>
    );
}