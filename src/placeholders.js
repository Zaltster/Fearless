import React, { useState } from 'react';

const DisappearingButton = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <button onClick={handleClick}>
                    Click me to disappear
                </button>
            )}
        </>
    );
};

export default DisappearingButton;