import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Landing1 = () => {
    const navigate = useNavigate();

    const handleshop = () => {
        navigate('/shop');
    };

    const handlesell = () => {
        navigate('/sell');
    };

    const handleadmin = () => {
        navigate('/dashboard');
    };

    return (
        <div className="h-screen w-full">
            <div className="flex justify-between px-10 h-[8%] bg-customblue items-center">
                <div>
                    <span className="text-3xl font-bold text-blue-800">Books</span>
                </div>
                <div className="flex gap-10 ">
                    <button className="hover-style">HOME</button>
                    <button className="hover-style">ABOUT</button>
                    <button onClick={handleshop} className="hover-style">SHOP</button>
                    <button onClick={handlesell} className="hover-style">SELL YOUR BOOK</button>
                    <button className="hover-style">BLOG</button>
                </div>
                <div>
                    <button onClick={handleadmin}>Admin</button>
                </div>
            </div>
            <motion.div
                className="px-10 flex h-[92%] bg-customblue"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
            >
                <div className="flex flex-col justify-center ">
                    <span className="text-6xl font-bold">Buy and sell your</span>
                    <span className="text-6xl font-bold pt-2">books <span className="text-blue-700">for the best</span></span>
                    <span className="text-6xl font-bold text-blue-700 pt-2">prices</span>
                    <span className="pt-8">Find and read more books you will love ,and krac of the books you want to read.be</span>
                    <span>part of the world largest community of books lover on bookreads</span>
                    <div className="pt-4">
                        <input className="h-10 w-60" placeholder="Search your book"></input>
                        <button className="bg-blue-700 rounded-md h-10 w-32 font-semibold text-white mt-4">Search</button>
                    </div>
                </div>
                <div className="flex-1" style={{backgroundImage: 'url(./image12.jpg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%', maxHeight: '100%'}}></div>
            </motion.div>
        </div>
    );
};

export default Landing1;
