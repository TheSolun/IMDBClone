import React, {useState, useEffect} from 'react';
import './App.css';
import TMDB from './TMDB';
import FeaturedMedias from './components/FeaturedMedias';

export default () => {

  const [mediaList, setMediaList] = useState([]);
  const [featuredMediaList,setFeaturedMediaList] = useState([]);

  useState(()=>{

    const loadAll = async () => {

      let list = await TMDB.getHomeList();
      setMediaList(list);

      let trendingMovieDay = list.filter(i=>i.slug === 'trending-movie-day')[0].items.results;
      let auxFeaturedMediaList = trendingMovieDay;
      let trendingTvDay = list.filter(i=>i.slug === 'trending-tv-day')[0].items.results;
      trendingTvDay.forEach(function(item){
        auxFeaturedMediaList.push(item)
      });
      setFeaturedMediaList(auxFeaturedMediaList);

    }

    loadAll();

  },[]);
  console.log(featuredMediaList);
  return(
    <div className="page">

      <FeaturedMedias medias={featuredMediaList}/>
    
    </div>
  );

};