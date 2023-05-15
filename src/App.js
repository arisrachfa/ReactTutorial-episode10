// libraries 
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

// style
import './App.css';

// pages
import Home from './Pages/Home'
import Profil from './Pages/Profil'
import Contact from './Pages/Contact'
import Navbar from './Navbar';

function App() {
  // membuat sebuah function untuk memanggil QueryClient yang nantinya digunakan untuk menjadi wadah value
  // pada saat digunakan sebagai global state / diwraping untuk menangkap data saat fetch data
  const client = new QueryClient({
    // maksud dari default options ini yaitu ketika kita pindah dari web yang kita liat kemudian kita balik lagi
    // maka data akan langsung terfecth yang terbaru. PERLU DIINGAT bahwa default dari React-Query yaitu dia akan selalu
    // melakukang fetch data terbaru dari sebuah API / data.
    defaultOptions: {
      queries: {refetchOnWindowFocus: false},
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <div className='navigation'>
            <Navbar />
          </div>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profil' element={<Profil/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
