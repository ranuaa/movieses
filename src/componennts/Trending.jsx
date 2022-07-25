import { useEffect, useState } from "react";
import '../style/Trending.css'
import { Carousel, Button } from "react-bootstrap";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";

function Trending() {

    const [trending, setTrending] = useState([]);



    useEffect(() => {
        getTrending();
    }, []);




    const getTrending = async () => {
        const api = await fetch(`${process.env.REACT_APP_BASE_URL}/trending/all/week?api_key=${process.env.REACT_APP_TMDB_KEY}`);
        const data = await api.json();
        setTrending(data.results)
    }



    return (
        <div >
            <div className="haha">
                <Carousel className="Slider">
                    {trending.slice(0, 5).map((results) => {
                        return (
                            <Carousel.Item className="isi-isi-slider" key={results.id}>
                                <img
                                    src={`${process.env.REACT_APP_IMAGE_URL}/${results.backdrop_path}`} alt='sasas'
                                    className="isi-slider"
                                    />
                                <Carousel.Caption>
                                    <div className="idee">
                                        <p><strong>
                                        {results.id}</strong></p>
                                    </div>
                                        <ReactStars
                                        count={5}
                                        half={true}
                                        value={results.vote_average / 2}
                                        size={24}
                                        edit={false}
                                        color2={'#ffd700'} />
                                    <h3>{results.title}</h3>
                                    <p>{results.overview}</p>
                                    <Link to={`/details/${results.id}`}>
                                    <Button>Watch Now</Button>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    );
}




export default Trending