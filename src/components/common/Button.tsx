import React from 'react';

enum ButtonType {
  Neutral = "btn-neutral",
  Primary = "btn-primary",
  Secondary = "btn-secondary",
  Accent = "btn-accent",
  Ghost = "btn-ghost",
  Link = "btn-link",
}

interface Props{
    text?: string;
    onClick?: () => void;
    type?: ButtonType;
    width?: string;
    height?: string;
    className?: string;
}



const Button: React.FC<Props> = ({text, onClick, type = ButtonType.Primary, width, height, className}) => {
    return (
        <button className={`btn ${type} w-${width} h-${height} ${className}`} onClick={onClick}>
          {text}
        </button>
    );
}

export default Button;
export {ButtonType};