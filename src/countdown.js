import React, { useState, useEffect } from 'react';

function Countdown() {
    // Declare state variables
    const [timeLeft, setTimeLeft] = useState(30);
    const [isActive, setIsActive] = useState(true);

    // useEffect for the countdown logic
    useEffect(() => {
        let timer;
        if (isActive && timeLeft > 0) {
            timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [timeLeft, isActive]);

    // Reset function
    const resetCountdown = () => {
        setTimeLeft(30);
        setIsActive(true);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
            <div>
                <h1>{timeLeft}s</h1>
                {timeLeft === 0 && <p>{resetCountdown}</p>}
                <button onClick={resetCountdown}>Lock in</button>
            </div>
        </div>
    );
}

export default Countdown;