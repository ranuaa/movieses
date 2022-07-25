import Trending from "../componennts/Trending";
import NewRelease from "../componennts/NewRelease";
import React from 'react'
import TvShow from "../componennts/TvShow";

function Home() {
  return (
    <div>
        <Trending />
        <NewRelease />
        <TvShow />
    </div>
  )
}

export default Home;