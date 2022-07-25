import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../style/Details.css'
import { Col, Row } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList,faHeart, faBookmark, faStar, faPlay } from '@fortawesome/free-solid-svg-icons'



function DetailsComponent() {

  let params = useParams();
  const [detail, setDetail] = useState({});



const getDetail = async() => {
  const api = await fetch(`${process.env.REACT_APP_BASE_URL}/movie/${params.id}?api_key=${process.env.REACT_APP_TMDB_KEY}`);
  const data = await api.json();
  setDetail(data);
}

useEffect(() => {
  getDetail();
}, [params.id])


  return (
    <div className='asasas'>
      <div className=' banner-atas'
        style={{
          background: `linear-gradient(269.96deg, rgba(29, 29, 29, 0) 0.04%, rgba(29, 29, 29, 0.8) 59.5%),url(${process.env.REACT_APP_IMAGE_URL}/${detail.backdrop_path})`
        }}>

        <div className='bungkus-konten'>
          <div className='gambar'>
            <img src={`${process.env.REACT_APP_IMAGE_URL}/${detail.poster_path}`} alt=""
              className='isi-gambar'
            />
          </div>
          <div className='details'>
            <div className='isi-detail'>
              <h1>{detail.title}</h1>

              <div className='p-atas'>
                <span className='paged'>
                {detail.adult == false ? <span>PG-13</span>:  <span>18+</span>}
                </span>
                <span>{detail.release_date}</span>
                <span>
                  {detail.original_language}
                </span>
                <span>{detail.runtime}Min</span>
              </div>

              <div className='icons'>

              <ul>
                <li>
                <div style={{ width: 60, height: 60 }}>
                  <CircularProgressbar
                    value={detail.vote_average}
                    maxValue={10} 
                    text={`${Math.floor(detail.vote_average * 10)}%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#081C22",
                      textColor: "#fff",
                      pathColor: "#21D07A",
                      trailColor: "#204529",
                      textSize: "25"
                    })}
                  />
                </div>
                </li>
                <li>
                <FontAwesomeIcon icon={faList} />
                </li>
                <li>
                <FontAwesomeIcon icon={faHeart} />
                </li>
                <li>
                <FontAwesomeIcon icon={faBookmark} />
                </li>
                <li>
                <FontAwesomeIcon icon={faStar} />
                </li>
                <li>
                <FontAwesomeIcon icon={faPlay} />
                </li>
              </ul>
              </div>
                    <div className='keterangan'>
                    <p><em>{detail.tagline}</em></p>
                    <h4><strong>Overview</strong></h4>
                    <p>{detail.overview}</p>

                    </div>

                    <div className='extras'>
                      <ul>
                        <li>
                          <p><strong>Views</strong></p>
                          <p>{detail.popularity}</p>
                        </li>
                        <li>
                          <p><strong>Vote Average</strong></p>
                          <p>{detail.vote_average}</p>
                        </li>
                        <li>
                          <p><strong>Status</strong></p>
                          <p>{detail.status}</p>
                        </li>
                        <li>
                          <p><strong>Runtime </strong></p>
                          <p>{detail.runtime}</p>
                        </li>
                      </ul>
                    </div>
                    
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default DetailsComponent;