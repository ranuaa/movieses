import React from 'react'
import Home from './Home'
import {Route, Routes} from 'react-router-dom';
import List from './List';
import Kategori from './Kategori';
import Cari from './Cari';
import Details from './Details'


function pages() {
  return (
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list/:type' element={<List />} />
          <Route path='/kategori' element={<Kategori />} />
          <Route path='/search/:val' element={<Cari />} />
          <Route path='details/:id' element={<Details/> } />
      </Routes>
  )
}

export default pages