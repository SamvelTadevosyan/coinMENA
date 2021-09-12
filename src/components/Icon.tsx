import React from 'react';
import { getIcon } from '../services/iconService';

interface IconProps { 
    name: string;
    width?: string;
    height?: string;
    fill?: string;
}

export function Icon(props: IconProps) {
    const {
        name,
        width=16,
        height=16,
        fill="#8b949e",
    } = props;
    return (
        <div style={{width, height, fill,}}>{getIcon(name)}</div>
    );
}
