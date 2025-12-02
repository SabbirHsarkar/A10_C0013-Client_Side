import React, { useEffect, useState } from 'react';
import { motion } from "motion/react"
import { FaCalendar, FaStar } from "react-icons/fa";
import { Link } from 'react-router';


const PopularHome = () => {
    
    const [properties,setProperties]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/properties')
        .then(res=>res.json())
        .then(data=>setProperties(data))
        .catch(err=>console.log(err))
    },[])

   console.log(properties);

    return (
        <div className='mt-5 lg:px-[145px]'>
            <div>
                <h3 className='font-bold text-3xl text-center '>Featured Real Estate</h3>
            </div>
            
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
              {
                properties.slice(0,6).map(property=>
                    <motion.div initial={{ scale: 0 }} 
                    animate={{
                scale: 1,
              transition: { duration: 1 }
  }}
   className="card bg-base-100 w-96 shadow-sm mt-3 mb-3">
                <figure>
                    <img className='w-full h-[250px] object-cover'
                        src={property?.image}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{property?.name}</h2>
                    <p>{property?.description}</p>
                   
         <div className='flex flex-2 gap-5 justify-between '>
              <div className="justify-start mt-3">
          <p className="flex items-center gap-1">
            <FaCalendar className="" />
            {property?.date}
          </p>
        </div>

        <div className="card-actions justify-end">
        
        <Link to={`/details/${property?._id}`}>
         <button className="btn btn-primary">View details</button>
        </Link>
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

export default PopularHome;