import { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import CharacterGrid from "./components/characters/CharacterGrid";

import "./App.css";

import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const ApiData = async () => {
      const { data } = await axios(
        `https://breakingbadapi.com/api/characters?name=${query}`
      ).catch((err) => console.log(err));
      setItems(data);
      setLoading(false);
    };
    ApiData();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={loading} items={items} />
    </div>
  );
}

export default App;
