import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  const options = {
    method: 'GET',
    url: 'https://shoes-collections.p.rapidapi.com/shoes',
    headers: {
      'X-RapidAPI-Key': 'afd037ad37mshcebc8e0f06321dep155c19jsn88bee3dcc6a7',
      'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
    }
  };

  useEffect(() => {
  
    fetch("https://shoes-collections.p.rapidapi.com/shoes", {
      method: "GET",
      withCredentials: true,
      headers: {
        'X-RapidAPI-Key': 'afd037ad37mshcebc8e0f06321dep155c19jsn88bee3dcc6a7',
        'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
      }
    })
      .then(resp => resp.json())
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
      
  }, [])
  

  console.log(options)
  return (
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  );
}

export default App;
