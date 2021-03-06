import React, {useState, useEffect} from 'react';
import './FeaturedMedias.css';

export default ({medias}) => {

    const [featuredMainWidth, setFeaturedMainWidth] = useState(0);

    useEffect(()=>{
        const loadAll = async () => {
            setFeaturedMainWidth((window.innerWidth * 62.2)/100);
        }
        loadAll();
    },[]);

    return(
        <section className="featured">

            <div className="featured-main">
                <div className="featured-main-list" style={{width: featuredMainWidth * medias.length}}>
                    {medias.length > 0 && medias.map((item,key)=>(
                        <div key={key} className="featured-main-item">
                            <a href="https://developers.themoviedb.org/3/trending/get-trending">
                                <div className="featured-main-item-back" style={{
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundImage: `url(https://image.tmdb.org/t/p/original${medias[key].backdrop_path})`
                                }}>
                                    <div className="featured-main-item-vertical"></div>
                                </div>
                            </a>
                            <div className="featured-main-poster" style={{
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundImage: `url(https://image.tmdb.org/t/p/w400${medias[(key==medias.length-1)?0:key+1].poster_path})`
                            }}>
                            </div>
                            <div className="plusIcon"></div>
                        </div>
                    ))}
                    <div className="featured-main-left"></div>
                    <div className="featured-main-right"></div>
                </div>
            </div>

            <div className="featured-list">
                
            </div>

        </section>
    );

}