import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e);
    getQuery(e);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          placeholder="Search Characters"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          className="form-control"
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
