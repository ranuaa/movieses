import React from 'react'
import '../style/Kategori.css'
import { useState,useEffect } from 'react'




function Kategori() {

    let Background = 'https://picsum.photos/808/280?random=';

    const [kategori, setKategori] = useState([]);
    // const [quote, setQuote] = useState([]);
    // var quotes = 'quote';

  useEffect(() => {
    getKategori();

  }, []);

  const getKategori = async () => {
    const api = await fetch(`${process.env.REACT_APP_BASE_URL}/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_KEY}`);
    const data = await api.json();
    setKategori(data.genres);
 
  }

//   const getQuote = () => {
//     let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         let datas = data.quotes;
//         let randomNum = Math.floor(Math.random() * datas.length);
//         let randomQuote = datas;
//         setQuote(randomQuote);
//       })
//   }




    return (
        <div className='Kategori'>
            <div className="wrapper">
                <h1>Categories</h1>
                {kategori.map((genres) => {
                    return (

                        <div className="cols" key={genres.id}>
                        <div className="col">
                            <div className="container">
                                <div className="front depan"
                                
                                style={{  
                                     background: `url(${Background}${genres.id})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                  }}
                                
                                
                                >
                                    <div className="inner">
                                        <p>{genres.name}</p>
                                        <span> {genres.index}</span>
                                    </div>
                                </div>
                                <div className="back"
                                
                                style={{  
                                    background: `url(${Background}${genres.id}${+1})`,
                                   backgroundSize: 'cover',
                                   backgroundRepeat: 'no-repeat'
                                 }}
                                >
                                    <div className="inner">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    )
                })}

            </div>
        </div>
    )
}

export default Kategori