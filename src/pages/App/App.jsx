import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import { SearchSuggestions } from '../../components/SearchSuggestions/SearchSuggestions';
import Search from '../../components/SearchBar/Search';
import LandingPage from '../../components/LandingPage/LandingPage';

export default function App() {
  // const [user, setUser] = useState(getUser());

  return (
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </main>
  );
}
