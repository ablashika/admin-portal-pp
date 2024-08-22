import React from 'react';

interface ButtonProps {
    text: string;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, size = 'medium', onClick }) => {
    return (
        <button className={`button ${size}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;