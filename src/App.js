import { useState, useEffect } from "react";
import MainPage from "./MainPage";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import WeaponDetailsPage from "./WeaponDetailsPage";

function App() {
  const [search, setSearch] = useState('')
  const [weapons, setWeapons] = useState([])
  const [favorites, setFavorites] = useState([])
  
  useEffect(() => {
    fetch('https://jgalat.github.io/ds-weapons-api/')
      .then(r => r.json())
      .then(setWeapons)
      .catch(() => alert('Error: Failed to retrieve weapon list.'))

    fetch('https://still-escarpment-16824.herokuapp.com/favoriteWeapons')
      .then(r => r.json())
      .then(data => setFavorites(data.map(w => w.id)))
      .catch(() => alert('Error: Failed to retrieve favorites.'))
  }, [])
  
  const filteredWeapons = weapons.filter(w => 
    w.name.toLowerCase().includes(search.toLowerCase()) ||
    w.weapon_type.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="App">
      <Header 
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route 
          path='/' 
          element={<MainPage 
            weapons={filteredWeapons}
            favorites={favorites}
            setFavorites={setFavorites}
            search={search}
          />} 
        />
        <Route
          path="/favorites"
          element={<MainPage
            weapons={filteredWeapons.filter(w => favorites.includes(w.name))}
            favorites={favorites}
            setFavorites={setFavorites}
            search={search}
          />}
        />
        {weapons.map(w => 
        <Route
          key={w.name}
          path={`/${w.name.replaceAll(' ', '+')}`}
          element={<WeaponDetailsPage
            weapon={w}
          />}
        />)}
      </Routes>
    </div>
  )
}

export default App;
