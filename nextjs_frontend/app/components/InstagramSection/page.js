import React from 'react';
import Image from "next/image";

const page = () => {
    const images = [
        {imageUrl: '/../public/img/mainImag.jpg'},
        {imageUrl: '/../public/img/T1_img.jpg'},
        {imageUrl: '/../public/img/mainImag.jpg'},
        {imageUrl: '/../public/img/T4_img.jpg'},
    ];

    return (
        <div className="fullwidth fwInstagram">
            <div className="container cInstagram">
                <h2>instagram</h2>
                <div className="images">
                    {images.map((image, key) => {
                        return (
                            <div className="image" key={key}>
                                <Image src={image.imageUrl} alt="test" width={300} height={300}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default page;