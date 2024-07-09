import React, { useState, useEffect } from 'react';
function Countdown({ champlockin }) {
    const [timeLeft, setTimeLeft] = useState(30);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let timer;
        if (isActive && timeLeft > 0) {
            timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [timeLeft, isActive]);

    const resetCountdown = () => {
        setTimeLeft(30);
        setIsActive(true);
    };

    const handleLockIn = () => {
        champlockin();
        resetCountdown();
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
            <div>
                <h1>{timeLeft}s</h1>
                <button onClick={handleLockIn}>Lock in</button>
            </div>
        </div>
    );
}

export default Countdown;