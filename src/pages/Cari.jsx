import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-stars';
import '../style/List.css';


function Cari() {

    let params = useParams();
    const [search, setSearch] = useState([]);


const getSearch = async (name) => {
    const data = await fetch(`${process.env.REACT_APP_BASE_URL}/search/multi?query=${name}&api_key=${process.env.REACT_APP_TMDB_KEY}`);
    const hasil = await data.json();
    setSearch(hasil.results)

}

    useEffect(() => {
        getSearch(params.val);
    }, [params.val])
    


  return (
    <div className='List'>
      <h1 className='headder'>Hasil Pencarian  {params.val}</h1>
      <div id="cards_landscape_wrap-2">
        <div className="container">
          <div className="row">
            {search.map((results) => {
              return (

                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" key={results.id}>
                <div className="card-flyer" >
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
                      <p>{results.overview.substring(0,100)}</p>
                    </div>
                  </div>
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

export default Cari