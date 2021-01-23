
import React, { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import Table from "./components/Table"
import Input from './components/Input'

const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Fetch API data

  useEffect(() => {
    fetchCharacters(`https://swapi.dev/api/people/?page=1`)
  }, [])

  const characterSearch = async (searchTerm) => {
    setIsLoading(true);
    fetchCharacters(`https://swapi.dev/api/people/?search=${searchTerm}`)
  };

  const fetchCharacters = async (url) => {
      const response = await axios(url)
      for (const character of response.data.results) {
      const homeworld = await axios.get("https" + character.homeworld.slice(4));
      character.homeworld = homeworld.data.name;

      if (character.species.length !== 0) {
        const species = await axios.get("https" + character.species[0].slice(4));
        !species.data.name ? character.species = "Human" : character.species = species.data.name;
      } else {
        character.species = "Human"
      }
    }

    setCharacters(response.data.results);
    setIsLoading(false);
  }

  return (
    <div>
      <h1 className="header">Star Wars API</h1>

      <Input characters={characterSearch} isLoading={isLoading} />
      <Table characters={characters} isLoading={isLoading} />
    </div>
  )
}

export default App