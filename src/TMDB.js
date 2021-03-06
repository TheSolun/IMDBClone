const API_KEY = '975463dfec5f4506932668693941a2c4';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

/*
    trending movie/tv day
    reviews day
    recomendations
    top rated
    trailers
    prime video
*/

export default {

    getHomeList: async () => {
        return [
            {
                slug: 'trending-movie-day',
                items: await basicFetch(`/trending/movie/day?api_key=${API_KEY}`)
            },
            {
                slug: 'trending-tv-day',
                items: await basicFetch(`/trending/tv/day?api_key=${API_KEY}`)
            }
        ];
    }

}