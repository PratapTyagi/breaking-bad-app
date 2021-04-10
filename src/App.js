import { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import "./App.css";

import { ApiData } from "./apis";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    ApiData()
      .then((data) => setItems(data))
      .catch((err) => console.log(err));

    setLoading(false);
  }, []);

  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={loading} items={items} />
    </div>
  );
}

export default App;
