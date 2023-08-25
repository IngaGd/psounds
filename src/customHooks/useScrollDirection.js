import { useEffect, useState } from "react";

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        let lastSrollY = window.pageYOffset;

        const handleScroll = () => {
            const currentSrollY = window.pageYOffset;
            const direction = currentSrollY > lastSrollY ? 'down' : 'up';
            if (direction !== scrollDirection
                && (currentSrollY - lastSrollY > 10
                    || currentSrollY - lastSrollY < - 10)) {
                setScrollDirection(direction);
            }
            lastSrollY = currentSrollY > 0 ? currentSrollY : 0;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollDirection]);

    return scrollDirection;
}

export default useScrollDirection;