import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

const Home = () => {
  // fetch data in useQuery using Axios
  // useQuery sendiri memiliki syntax yaitu argument yang pertama merupkan array[] yang merepresentasikan uniqueKey dan
  // arguments selanjutnya merupakan sebuah function untuk fetch data
  // berikut contoh penggunaan useQuery untuk fetching API dengan GET request :
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact")
    .then((res) => res.data)
  })

  // kondisi ketika
  if (isError) {
    // error ketika halaman API yang kita GET data salah
    return <h1>Sorry, there was an Error</h1>
  };

  if (isLoading) {
    return <h1>Loading...</h1>
  };

  return (
    <div className='App'>
      <h1>
        This is Home Page
      </h1>
      <p>{catData?.fact}</p>
      <button onClick={refetch}> Update Data</button>
    </div>
  )
}

export default Home