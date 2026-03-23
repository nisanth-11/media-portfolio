import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trailingPos, setTrailingPos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('a') ||
                e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        document.addEventListener('mousemove', updatePosition);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // Smooth trail effect
    useEffect(() => {
        let animationFrameId;

        const updateTrailing = () => {
            setTrailingPos(prev => {
                const dx = position.x - prev.x;
                const dy = position.y - prev.y;
                return {
                    x: prev.x + dx * 0.15, // Easing factor
                    y: prev.y + dy * 0.15
                };
            });
            animationFrameId = requestAnimationFrame(updateTrailing);
        };

        updateTrailing();
        return () => cancelAnimationFrame(animationFrameId);
    }, [position]);

    // Avoid rendering on mobile/touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            <div
                className={`custom-cursor-dot ${isHovering ? 'hover' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
            <div
                className={`custom-cursor-ring ${isHovering ? 'hover' : ''}`}
                style={{ left: `${trailingPos.x}px`, top: `${trailingPos.y}px` }}
            />
        </>
    );
};

export default CustomCursor;
