import React, { useEffect, useState } from 'react';
import { motion } from "motion/react"
import { FaStar } from "react-icons/fa";


const PopularGames = () => {
    
    const [games,setgames]=useState([]);

    useEffect(()=>{
        fetch('games.json')
        .then(res=>res.json())
        .then(data=>setgames(data))
        .catch(err=>console.log(err))
    },[])

   

    return (
        <div className='mt-5 lg:px-[145px]'>
            <div>
                <h3 className='font-bold text-3xl text-center '>Popular Games</h3>
            </div>
            
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
              {
                games.slice(0,3).map(game=>
                    <motion.div initial={{ scale: 0 }} 
                    animate={{
                scale: 1,
              transition: { duration: 1 }
  }}
   className="card bg-base-100 w-96 shadow-sm mt-3 mb-3">
                <figure>
                    <img className='w-full h-[250px] object-cover'
                        src={game?.coverPhoto}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{game?.title}</h2>
                    <p>{game?.description}</p>
                   
         <div className='flex flex-2 gap-5 justify-between '>
              <div className="justify-start mt-3">
          <p className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            {game?.ratings}
          </p>
        </div>

        <div className="card-actions justify-end">
        <button className="btn btn-primary">View details</button>
        </div>

        </div>
                    
                </div>
            </motion.div>

                )
            }
          </div>
        
        
            </div>
           
    );
};

export default PopularGames;