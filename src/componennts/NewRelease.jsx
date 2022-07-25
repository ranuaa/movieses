import '../style/NewRelease.css'
import ReactStars from "react-stars";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink, Link } from 'react-router-dom'







function NewRelease() {


  const [newRelease, setNewRealease] = useState([]);

  useEffect(() => {
    getNewRelease();
  }, []);

  const getNewRelease = async () => {
    const api = await fetch(`${process.env.REACT_APP_BASE_URL}/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}`);
    const data = await api.json();
    setNewRealease(data.results);
  }

  return (
    <div>
      <h1 className='headder'>New Release</h1>
      <div id="cards_landscape_wrap-2">
        <div className="container">
            <div className="row">
              {newRelease.slice(0, 4).map((results) => {
                return (
                  
                  <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" key={results.id}>
                        <div className="card-flyer" >
                        <Link to={`/details/${results.id}`}>
                            <div className="text-box">
                                <div className="image-box">
                                    <img src={`${process.env.REACT_APP_IMAGE_URL}/${results.backdrop_path}`} alt="" />
                                </div>
                                <div className="text-container">
                                <ReactStars
                                        className='Bintang'
                                        count={5}
                                        half={true}
                                        value={results.vote_average / 2}
                                        size={24}
                                        edit={false}
                                        color2={'#ffd700'} />
                                    <h6>{results.title}</h6>
                                    <p>{results.overview.substring(0, 140)}</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                </div>
                
                )
              })}
              
            </div>
            <NavLink to={'/list/NewRelease'} state={{url: '/trending/movie/week'}}>
            <Button className='Tombol-Lebih'>See More</Button>
            </NavLink>
           
        </div>
        
    </div>

    </div>
  )
}

export default NewRelease