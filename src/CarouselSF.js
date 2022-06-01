import { useState } from 'react';
import leftArrow from './bracket-left.png';
import rightArrow from './bracket-right.png';

function CarouselSF( {sf} ) {
    const [items] = useState(sf);
    const [slide, setSlide] = useState(0);
    const [showMore, setShowMore] = useState(false);

    const nextSlide = (info) => {
        setSlide(slide => {
            slide++;

            if (slide > info.length - 1) {
                slide = 0;
            }

            return slide;
        })

        setShowMore(showMore => {
            if (showMore === true) {
                showMore = !showMore; 
            }

            return showMore;
        })
    }

    const prevSlide = (info) => {
        
        setSlide(slide => {
            slide--;

            if (slide < 0) {
                slide = info.length - 1;
            }

            return slide;
        })
        
        setShowMore(showMore => {
            if (showMore === true) {
                showMore = !showMore; 
            }

            return showMore;
        })
    }

    const changeTextLength = () => {
        setShowMore(!showMore);
    }

    return (
        <div className='Carousel-general-cont'>
            {items.map((item => {
                const {cityName, info} = item;
                const {image, imageName, address, description} = info[slide];

                return (
                <div key={item.id} className='Carousel-main-container'>
                    <div>
                        <h3 className='Carousel-cityName'>{cityName}</h3>
                    </div>

                    <div className='Carousel-container'> 
                        <button className='CarouselNYC-btn' onClick={() => prevSlide(info)}>
                        <img className='CarouselNYC-arrow' src={leftArrow} alt='left-bracket'/></button>

                        <img className='Carousel-picture' src={image} alt='NYC-pic'/>

                        <button className='CarouselNYC-btn' onClick={() => nextSlide(info)}>
                        <img className='CarouselNYC-arrow' src={rightArrow} alt='right-bracket'/></button>
                    </div>

                    <p className='Carousel-imageName'>{imageName}</p>
                    <p className='Carousel-address'>{address}</p>
                    <p className='Carousel-description'>{showMore ? description : description.substring(0, 160) + '...'}
                    <button className='Carousel-showMore-btn' onClick={() => changeTextLength()}>
                        {showMore ? 'Show less' : 'Show more'}</button></p>
                    
                </div>
                )
            }))}
            
        </div>
    )
}

export default CarouselSF;