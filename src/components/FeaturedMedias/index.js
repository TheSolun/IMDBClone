import React, {useState, useEffect} from 'react';
import './FeaturedMedias.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'

export default ({medias}) => {

    const [featuredMainWidth, setFeaturedMainWidth] = useState(0);
    const [scrollX, setScrollX] = useState(0);
    var forCount = -1;
    const [featuredIdx, setFeaturedIdx] = useState(0);
    var mediasLength = 0;

    const handleLeftArrow = () => {
        let x = scrollX - ((window.innerWidth * 62.2)/-100);
        let idx = featuredIdx - 1;
        if(idx < 0){
            idx = 0;
            x = 0;
        }
        setFeaturedIdx(idx);
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let lastScrolX = scrollX;
        let x = scrollX + ((window.innerWidth * 62.2)/-100);
        let idx = featuredIdx + 1;
        if(idx >= mediasLength){
            idx = mediasLength-1;
            x = lastScrolX;
        }
        setFeaturedIdx(idx);
        setScrollX(x);
    }

    useEffect(()=>{
        setFeaturedMainWidth((window.innerWidth * 62.2)/100);
    },[]);

    return(
        <section className="featured">

            <div className="featured-main">
                <div className="featured-main-list" style={{
                    marginLeft: scrollX,
                    width: featuredMainWidth * medias.length
                }}>
                    {medias.length > 0 && medias.map((item,key) => {
                        forCount++;
                        mediasLength = medias.length;
                        return(
                            <div key={key} className="featured-main-item">
                                <a className="featured-main-item-link" href="https://developers.themoviedb.org/3/trending/get-trending">
                                    <div className="featured-main-item-back" style={{
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundImage: `url(https://image.tmdb.org/t/p/original${medias[forCount].backdrop_path})`
                                    }}>
                                        <div className="featured-main-item-vertical"></div>
                                    </div>
                                    <div className="featured-main-text">
                                        <div className="featured-main-text-row">
                                            <div className="featured-main-text-icon">
                                                <FontAwesomeIcon icon={faPlayCircle} size="5x" />
                                            </div>
                                            <div className="featured-main-text-text">
                                                <h1>"Made for Love"</h1>
                                                Watch the Teaser
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                {forCount <= featuredIdx+1 && 
                                    <div style={{
                                        left: (((window.innerWidth * 4.4)/100) + ((forCount - featuredIdx) * featuredMainWidth)),
                                        visibility: (forCount == featuredIdx)? 'visible' : 'hidden'
                                    }}>
                                        <div className="featured-main-poster" style={{
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundImage: `url(https://image.tmdb.org/t/p/w400${medias[forCount].poster_path})`,
                                        }}>
                                        </div>
                                        <div className="featured-main-poster-plus">
                                            <div className="featured-main-poster-plus-border">
                                                <div className="featured-main-poster-plus-icon">+</div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    })}
                    <div className="featured-main-left" onClick={handleLeftArrow}><FontAwesomeIcon icon={faChevronLeft} size="2x" /></div>
                    <div className="featured-main-right" onClick={handleRightArrow}><FontAwesomeIcon icon={faChevronRight} size="2x" /></div>
                </div>
            </div>

            <div className="featured-list">
                
            </div>

        </section>
    );

}