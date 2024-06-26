import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Body = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    const handleExplore = () => {
        navigate('/shop');
    };

    useEffect(() => {
        const handleScroll = () => {
            const top = ref.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (top < windowHeight * 0.8) {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsVisible(false); // Reset isVisible state whenever the component re-renders
    }, [ref]);

    return (
        <div className="flex flex-row h-[70vh] w-full px-20 bg-slate-100" ref={ref}>
            <motion.div
                className="flex-1 h-full w-[50%]"
                style={{
                    backgroundImage: 'url(./image10.webp)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    maxWidth: '100%',
                    maxHeight: '100%'
                }}
                initial={{ opacity: 0, y: -50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
            ></motion.div>
            <div className="flex flex-col h-full w-[50%] pl-20 pt-14">
                <span className="text-6xl font-bold">Find Your Favorite</span>
                <span className="text-6xl font-bold pt-4 text-blue-800">Book Here!</span>
                <span className="pt-4">Are you looking for your next captivating read? Look no further! Dive into our collection of handpicked favorite books that are sure to captivate your imagination and leave you spellbound.</span>
                <button onClick={handleExplore} className="bg-blue-700 rounded-md h-10 w-32 font-semibold text-white mt-4">Explore Now</button>
            </div>
        </div>
    );
};

export default Body;
