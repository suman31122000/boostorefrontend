
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Api from './api';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [skip, setSkip] = useState(0);
    const [remaining, setRemaining] = useState(Math.max());
    const limit = 10;

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`${Api}/find`);
                const response = await axios.get(`${Api}/api/v1/getbook?skip=${skip}&limit=${limit}`);
                console.log(response.data);
                setSkip(skip + limit);
                setBooks(response.data.books);
                setRemaining(response.data.remaining);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    

    useEffect(() => {
        const text = document.getElementById('text');
        text.classList.add('animate-bounce');
    }, []);

    const fetchData = async () => {
        try {
            // const response = await axios.get(`${Api}/find`);
            const response = await axios.get(`${Api}/api/v1/getbook?skip=${skip}&limit=${limit}`);
            setSkip(skip + limit);
            setBooks([...books, ...response.data.books]);
            setRemaining(response.data.remaining);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    function debounce(func, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(this, args), delay);
        };
    }
    if (remaining > 10) {
        window.addEventListener('scroll', debounce(handleScroll, 200));
  
    }
    

    function handleScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const bottomPosition = document.documentElement.scrollHeight;
        // console.log(`Scroll Position: ${scrollPosition}, Bottom: ${bottomPosition}`);
        // debugger; // Use this for inspection during executio
    
        if (scrollPosition >= bottomPosition - 100) {
            console.log("Fetching Data Triggered");
            fetchData();

        }
    }
    


    return (
        <div className="h-fit w-full bg-slate-100 flex flex-col">
            <div className="h-[40vh] w-full flex justify-center items-center " style={{backgroundImage: 'url(image1.webp)',backgroundRepeat:'no-repeat',backgroundPosition:'centre'}}>
                <span id='text'  className="text-6xl font-bold text-slate-400">WELCOME TO BOOK STORE</span>
            </div>
            <div className="flex-grow flex items-center justify-center mt-10">
                <div className="grid sm:grid-cols-3 grid-cols-2 gap-8" style={{ maxWidth: "1200px" }}>
                    {books.map((books, index) => (
                        <div key={index} className="relative flex flex-col justify-center items-center bg-gray-50 shadow-xl p-2 hover:translate-x-0 hover:translate-y-0 hover:scale-105 hover:transition-all hover:duration-700 h-[500px] hover:bg-gray-200" >
                            <img src={books.image} alt="Book" className="w-[300px] h-[300px] p-5" />
                        
                                <div className='flex flex-col items-center h-[90%]'>
                                <h2 className="text-xl font-medium">{books.title}</h2>
                                <p className="text-gray-600">{books.author}</p>
                                <p className='text-gray-600 text-sm'>{books.description}</p>
                                <p className="text-gray-600">${books.price}</p>
                                </div>

                                <div className='absolute bottom-3 h-[10%]'>
                                <button
                                class="  px-8 z-30  bg-gray-700 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-gray-950 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700  hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl h-10"
                                 >
                                Borrow
                                </button>
                                
                                </div>
                                

                            
                        </div>
                        
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default Books;
