import { useEffect, useState, useRef } from 'react';

function useCountUp(endValue, duration) {
    const [value, setValue] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const end = endValue;
            const increment = end / (duration / 10); // Calculate increment based on duration
            const step = () => {
                start += increment;
                if (start < end) {
                    setValue(parseFloat(start.toFixed(2)));
                    requestAnimationFrame(step);
                } else {
                    setValue(end);
                }
            };

            requestAnimationFrame(step);
        }
    }, [isVisible, endValue, duration]);

    return [value, ref];
}

export default useCountUp;