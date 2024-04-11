import React from 'react'
import { Link } from 'react-router-dom'

const data = [{
    title:"Sushi Combos for your Next Party",
    image:require("../img/menu14.jpg"),
    collection:156
},
{
    title:"Everything Bagel",
    image:require("../img/menu15.jpg"),
    collection:156
},
{
    title:"Cook Like a Chef",
    image:require("../img/menu16.jpg"),
    collection:156
},
{
    title:"Exquisite Dinner Receipe Ideas",
    image:require("../img/menu17.jpg"),
    collection:""
},
{
    title:"The Ultimate Cookie Frenzy",
    image:require("../img/menu18.jpg"),
    collection:156
},
{
    title:"For the Love of Donuts",
    image:require("../img/menu19.jpg"),
    collection:156
}
]

function Collections() {
  return (
    <div className='py-10'>
        
        <div className="flex justify-center items-center flex-col">
        <div>
        <h1 className='text-3xl font-bold mb-8'>
           Hand-Picked Collections
        </h1>
            <div className="grid grid-cols-2 gap-4 items-center justify-center">
                {data.map((d,k)=>(
                    <Link to={"#"} key={k}>
                    <figure  className='m-3 rounded-md overlay-card overflow-hidden relative transition- duration-500'>
                        
                        <img src={d.image} alt={"img"+k} className=' max-h-fit overflow-hidden '/>
                        
                        <figcaption className=' bg-[#ff632f83] mt-5 gap-4 flex justify-center items-center flex-col absolute left-0 right-0 w-full h-full z-50'>
                            <h2 className='text-2xl font-bold'>
                                {d.title}
                            </h2>
                            <span className='border-2 p-2 border-black'>
                                {d.collection} Receipes
                            </span>
                        </figcaption>
                    </figure>
                    </Link>
                ))}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Collections