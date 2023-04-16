import React, { useState } from 'react';
import './ChatWidget.css';

interface MyComponentProps {
    apiKey: string;
    position?: 'bottom-right' | 'bottom-left' | 'top-left' | 'top-right' | 'center-bottom' | 'center-top';
    backgroundColor?: string;
    textColor?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({
  apiKey,
  position = 'bottom-right',
  backgroundColor = '#f0f0f0',
  textColor = '#000',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const componentStyle = {
    backgroundColor,
    color: textColor,
  };

  return (
    <div
      className={`my-component ${position} ${isExpanded ? 'expanded' : ''}`}
      onClick={handleClick}
      style={componentStyle}
    >
      <h1>My React Component</h1>
      <p>API Key: {apiKey}</p>
    </div>
  );
};

export default MyComponent;