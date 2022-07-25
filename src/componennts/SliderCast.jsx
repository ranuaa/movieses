import React from 'react'
import '../style/Cast.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

function SliderCast() {
    return (
        <div>
            <Splide 
            options={{
                perPage: 2
            }}
            >
            <SplideSlide>
                <div className="container p-5">
                    
                    <div className="col">

                        
                            <div className="card h-100 shadow-sm"
                            style={
                                {width: 274,
                                height: 392}
                            }
                            >
                                <div className="text-center">
                                    <div className="img-hover-zoom img-hover-zoom--colorize">
                                        <img className="shadow" src="https://source.unsplash.com/B4TjXnI0Y2c/600x600"
                                            alt="Another Image zoom-on-hover effect" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="clearfix mb-3">
                                    </div>
                                    <div className="my-2 text-center">

                                        <h1>O-Ren Ishii</h1>
                                    </div>
                                    <div className="mb-3">
                                        <h2 className="text-uppercase text-center role">Web Developer</h2>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                </SplideSlide>
            </Splide>
        </div>



    )
}

export default SliderCast