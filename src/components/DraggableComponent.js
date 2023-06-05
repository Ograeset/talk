import React from 'react';
import Draggable from 'react-draggable';
import './DraggableComponent.css';




const DraggableComponent = ({ image , emotionValue }) => {
  const containerRef = React.useRef(null);

  const getBounds = () => {
    const containerElement = containerRef.current;
    const containerRect = containerElement.getBoundingClientRect();
    return {
      left: containerRect.left,
      top: containerRect.top,
      right: containerRect.right - containerElement.offsetWidth,
      bottom: containerRect.bottom - containerElement.offsetHeight
    };
  };

  return (
    <Draggable bounds="parent"  bounds={getBounds}>
      <div className="draggable-container" ref={containerRef}>
        <p>{emotionValue}</p>
        <img src={image} alt="Draggable" className="draggable-image" />
      </div>
    </Draggable>
  );
};

export default DraggableComponent;
