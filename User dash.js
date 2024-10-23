
import React from 'react';

const AIPrediction = ({ message }) => {
    const getPrediction = (msg) => {
      
        return msg.includes('urgent') ? 'High priority' : 'Normal priority';
    };

    return (
        <div>
            <h2>AI Prediction:</h2>
            <p>{getPrediction(message)}</p>
        </div>
    );
};

export default AIPrediction;
