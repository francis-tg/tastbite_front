import React from 'react'
import {IoStar} from "react-icons/io5"
const data1 = [
    {
        title:"Spinach and Cheese Pasta",
        image:require("../img/menu2.jpg"),
        start:5
    },
    {
        title:"Fancy Glazed Dounts",
        image:require("../img/menu3.jpg"),
        start:5
    },
    {
        title:"Mighty Cheesy Breakfast Burger",
        image:require("../img/menu4.jpg"),
        start:5
    }
]
const data2 = [
    {
        title:"Spinach and Cheese Pasta",
        image:require("../img/menu5.jpg"),
        start:5
    },
    {
        title:"Fancy Glazed Dounts",
        image:require("../img/menu6.jpg"),
        start:5
    },
    {
        title:"Mighty Cheesy Breakfast Burger",
        image:require("../img/menu7.jpg"),
        start:5
    }
]
const data3 = [
    {
        title:"Pasta",
        image:require("../img/menu8.png"),
        
    },
    {
        title:"Pizza",
        image:require("../img/menu9.png"),
        
    },
    {
        title:"Vegan",
        image:require("../img/menu10.png"),
        
    },
    {
        title:"Smoothies",
        image:require("../img/menu11.png"),
        
    },
    {
        title:"Breakfast",
        image:require("../img/menu12.png"),
        
    }
]
function ReceipeBook() {
  return (
    <div className='flex justify-center items-center'>
    <div className='w-[70%]'>
        <div className='py-8'>
        <h1 className='text-3xl font-bold mb-8'>
            Super Delicious
        </h1>
        <div className="grid grid-cols-3 gap-8">
           {
            data1.map((d,k)=>(
                <div className="flex flex-col gap-2 transform  overflow-hidden transition-transform duration-300" key={k}>
                    <div className='w-full h-full'>   
                        <img src={d.image} className='w-full h-full rounded-lg' alt="" />
                    </div>
                    <div className="flex">
                       {
                        Array.from({length:d.start}).map((_,k)=>(
                            <IoStar key={k} className='text-orange-500'/>
                        ))
                       }
                    </div>
                    <h1 className='font-bold'>{d.title}</h1>
                </div>
            ))
           }
        </div>
        </div>
       <div className='py-8'>
       <h1 className='text-3xl font-bold mb-8'>
        Sweet Tooth
        </h1>
        <div className="grid grid-cols-3 gap-8">
           {
            data2.map((d,k)=>(
                <div className="flex flex-col gap-2 transform  overflow-hidden transition-transform duration-300" key={k}>
                    <div className='w-full h-full'>   
                        <img src={d.image} className='w-full h-full rounded-lg' alt="" />
                    </div>
                    <div className="flex">
                       {
                        Array.from({length:d.start}).map((_,k)=>(
                            <IoStar key={k} className='text-orange-500'/>
                        ))
                       }
                    </div>
                    <h1 className='font-bold'>{d.title}</h1>
                </div>
            ))
           }
        </div>
       </div>
       <div className="py-8">
        <h1 className='text-3xl font-bold mb-8'>
            Popular Categories
        </h1>
        <div className="flex items-center justify-center gap-8">
            {data3.map((d,k)=>(
                <div className='flex flex-col gap-3 items-center justify-center' key={k}>
                    <img src={d.image} alt="" />
                    <p className='font-bold text-xl'>
                        {d.title}
                    </p>
                </div>
            ))}
        </div>
       </div>
    </div>
</div>

  )
}

export default ReceipeBook