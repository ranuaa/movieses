import  { React, useEffect, useState } from 'react';
import '../style/List.css';
import { Link, useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactStars from 'react-stars';



function List() {

  const [list, setList] = useState([]);
  let params = useParams();
  let location = useLocation();

  const getList = async () => {
    const data = await fetch(`${process.env.REACT_APP_BASE_URL}${location.state.url}?api_key=${process.env.REACT_APP_TMDB_KEY}`)
    const list = await data.json();
    setList(list.results);
  };

  useEffect(() => {
    getList();
  },[])


  return (
    <div className='List'>
      <h1 className='headder'>{params.type}</h1>
      <div id="cards_landscape_wrap-2">
        <div className="container">
          <div className="row">
            {list.map((results) => {
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
                      <p>{results.overview.substring(0, 120)}</p>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>


              )
            })}
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default List