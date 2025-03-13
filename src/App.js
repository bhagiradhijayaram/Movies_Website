import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import PopularMoviesPage from "./components/PopularMoviesPage";
import UpcomingMoviesPage from "./components/UpcomingMoviesPage";
import TopRatedMoviesPage from "./components/TopRatedMoviesPage";
import SingleMovieDetailsPage from "./components/SingleMovieDetailsPage";
import SearchedMoviesPage from "./components/SearchedMoviesPage";

import SearchContext from "./context/SearchContext";

import "./App.css";

const App = () => {
  const [searchInput, setSearchInput] = useState("");

  const onTriggerSearchingQuery = (text) => {
    setSearchInput(text);
  };

  return (
    <SearchContext.Provider
      value={{
        searchInput,
        onTriggerSearchingQuery,
      }}
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<PopularMoviesPage />} />
          <Route path="/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/top-rated" element={<TopRatedMoviesPage />} />
          <Route path="/movie/:id" element={<SingleMovieDetailsPage />} />
          <Route path="/search" element={<SearchedMoviesPage />} />
        </Routes>
      </BrowserRouter>
    </SearchContext.Provider>
  );
};

export default App;
