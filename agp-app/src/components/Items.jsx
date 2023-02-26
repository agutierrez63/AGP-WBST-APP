import axios from 'axios';
import { useEffect, useState } from 'react';

const Items = () => {
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/products').then((response) => {
            setListOfPosts(response.data);
        });
    }, []);

    return (
    <div> 
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            { listOfPosts.map((value, key) => { 
                return (
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='text-2xl font-bold text-center py-8'>{value.title}</h2>
                    <p className='text-center text-4xl font-bold'>{value.description}</p>
                    <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>${value.price}.00</p>
                    </div>
                    <button className='bg-[#d2a993] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Add To Cart</button>
                </div>
                );
            })}
            </div>
        </div> 
        ); 
    </div>
    )
}

export default Items;