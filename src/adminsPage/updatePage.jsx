
import { useState } from "react"
import axios from "axios";
const UpdatePage=()=>{
    const [typeselected,settypeselected]=useState("");
    const [updatedata,setupdatedata]=useState({
        bookid:"",
        title:"",
        description:"",
        author:"",
        publication:"",
        price:"",
        quantity:"",
    });
    const handleChange=(event)=>{
       const {name,value}=event.target;
       setupdatedata((prevData) => ({
        ...prevData,
        [name]: value, 
    }));
    }
    const handlesubmit=async(event)=>{
        event.preventDefault();
        try {
            const bookid=updatedata.bookid;
            const updatetype=typeselected;
            const updatevalue=updatedata[typeselected];
            const result=await axios.patch("http://localhost:8000/api/v1/updatebook",{bookid,updatetype,updatevalue})
            console.log(result);
            if(!result){
                console.log("book not updated");
            }
            else{
                console.log("book updated")
            }
            
        } catch (error) {
            console.log(error,"updatedata not submitted")
        }
    }
    const handletype=(event)=>{
        settypeselected(event.target.value);
    }
return(
    <div className="flex flex-col justify-center items-center pt-20">
    <div className=" flex flex-col justify-center items-center bg-gray-200 w-[500px]">
        <div className="pt-10">
            <h1 className="font-bold text-2xl">Update Page</h1>
        </div>
        <form onSubmit={handlesubmit}>
        <div className="flex flex-col pt-10">
            <label htmlFor="" className="text-md p-2">Book id</label>
            <input name="bookid" value={updatedata.id} onChange={handleChange} className="shadow-2xl rounded-lg border-none h-10 w-80" type="text" />
            </div>
        <div className="flex pt-5">
            <label htmlFor="type" className="text-md p-2">select type</label>
        <select className="" onChange={handletype} >
            <option value="title">title</option>
            <option value="description">description</option>
            <option value="author">author</option>
            <option value="publication">publication</option>
            <option value="price">price</option>
            <option value="quantity">quantity</option>
        </select>
        </div >
        <div className="flex flex-col pt-5">
            <label htmlFor="updatedvalue" className=" p-2">Updated Value</label>
            <input name={typeselected} value={updatedata.typeselected} onChange={handleChange} className="shadow-2xl border-none h-10 w-80 rounded-lg" type="text" />

            <div className="text-center p-4">
                            <button
                                type="submit"
                                className="mt-4 p-5 w-40 bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200 h-10"
                            >
                                Update Book
                            </button>
                        </div>
                        
            </div>
            </form>

    </div>
    </div>

)
}
export default UpdatePage