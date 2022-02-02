import { useState, useEffect } from "react";
import MainPage from "./MainPage";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";

function App() {
  const [search, setSearch] = useState('')
  const [weapons, setWeapons] = useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetch('https://jgalat.github.io/ds-weapons-api/')
    .then(r => r.json())
    .then(data => {
        setWeapons(data)
    })
  }, [setWeapons])
  
  const filteredWeapons = weapons.filter(w => 
    w.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="App">
      <Header 
        setSearch={setSearch}
      />
      <Routes>
        <Route 
        path='/' 
        element={<MainPage 
          weapons={filteredWeapons}
          setFavorites={setFavorites} />} 
        />
        <Route path='/favorites' />
      </Routes>
    </div>
  )
}

export default App;
