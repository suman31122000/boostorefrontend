import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Searchbooks = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { query } = useParams();
    console.log(query);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`${Api}/find`);
                const response = await axios.get(`${Api}/api/v1/bookdetails/${query}`);
                setBooks(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (query) {
            if(query===''){
                fetchData();                
            }
            fetchData();
        }
    }, [query]); 
    return (
        <div>
            <h1>Search Results</h1>
            {books.length === 0 ? (
                <p>No books found</p>
            ) : (
                <div className="h-[60%] w-full flex grid sm:grid-cols-5 grid-cols-2 p-8 gap-2 ">
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
            )}
        </div>
    );
};

export default Searchbooks;