import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const images =[
    "https://i.ibb.co/LpPwLpv/image.png",
    "https://i.ibb.co/1zsMh6p/image.png",
    "https://i.ibb.co/pbnKGmj/image.png",
    "https://i.ibb.co/GT6hX97/image.png",

    "https://i.ibb.co/KhbyT2t/image.png",
    "https://i.ibb.co/DrcFGQH/image.png",
    "https://i.ibb.co/7Gxm65r/image.png",
    "https://i.ibb.co/HHb7rzD/image.png",
    "https://i.ibb.co/pKMRJTw/image.png"
   
]


const CollegeGallery = () => {
    return (

        <div className='mt-52 max-w-screen-xl mx-auto'> 
            <h1 className='text-5xl text-center pb-12'>College <span className='text-[#ffc333] font-bold '>Graduate </span> Gallery</h1>
            <div className='' style={{ padding: '10px' }}>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter='20px'>
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{ width: "100%", display: "block" }}
                                alt=""
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
      
    );
};

export default CollegeGallery;