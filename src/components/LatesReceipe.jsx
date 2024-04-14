import React from 'react'
import {useNavigate} from 'react-router-dom'
const data1 = [
    {
        title: "Caramel Strawberry Milkshake",
        image: require("../img/menu20.jpg"),

    },
    {
        title: "Cashew Vegan Rice",
        image: require("../img/menu21.jpg"),

    },
    {
        title: "Smoked Salmon Salad Sandwich",
        image: require("../img/menu22.jpg"),

    },
    {
        title: "Salmon in Creamy Sun Dried Tomato Sauce",
        image: require("../img/menu23.jpg"),

    },
    {
        title: "Salmon in Creamy Sun Dried Tomato Sauce",
        image: require("../img/menu24.jpg"),

    },
    {
        title: "Salmon in Creamy Sun Dried Tomato Sauce",
        image: require("../img/menu25.jpg"),

    },
    {
        title: "Salmon in Creamy Sun Dried Tomato Sauce",
        image: require("../img/menu26.jpg"),

    },
    {
        title: "Salmon in Creamy Sun Dried Tomato Sauce",
        image: require("../img/menu27.jpg"),

    },
    {
        title: "Salmon in Creamy Sun Dried Tomato Sauce",
        image: require("../img/menu24.jpg"),

    },
    {
        title: "Salmon in Creamy Sun Dried Tomato Sauce",
        image: require("../img/menu25.jpg"),

    },
    {
        title: "Salmon in Creamy Sun Dried Tomato Sauce",
        image: require("../img/menu23.jpg"),

    },
    {
        title: "Salmon in Creamy Sun Dried Tomato Sauce",
        image: require("../img/menu27.jpg"),

    }
]
function LatesReceipe() {
    const navigate = useNavigate()
    return (
        <div className='py-10'>
            <div className="flex flex-col items-center justify-center">
                <div className='w-[70%]'>
                    <h1 className='text-3xl font-bold mb-8'>
                        Latest Receipes
                    </h1>
                    <div className="grid grid-cols-4 gap-8">
                        {data1.map((d, k) => (
                            <figure key={k} className='w-full card-scale-hover overflow-hidden rounded-lg' onClick={()=>navigate("/detail/"+parseInt(k+1))}>
                                <img src={d.image} className='rounded-lg overflow-hidden' alt='' />
                                <figcaption className='my-3'>
                                    <h1 className='text-md font-semibold font-serif'>{d.title}</h1>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                    
                </div>
                <button className='border-2 px-5 py-2 border-black mt-5 rounded'>Load more</button>
            </div>
        </div>
    )
}

export default LatesReceipe