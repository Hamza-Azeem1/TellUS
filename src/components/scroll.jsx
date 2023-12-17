import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show the button when the user scrolls down
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsVisible(scrollTop > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`fixed bottom-4 right-4 ${isVisible ? 'opacity-100' : 'opacity-0'}`} onClick={scrollToTop}>
            <FaArrowUp className="text-white text-5xl cursor-pointer bg-indigo-500 rounded-full p-2 hover:bg-indigo-600" />
        </div>
    );
};

export default ScrollToTop;
