import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Characters = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://marvel-backend-20.herokuapp.com/characters"
      );
      console.log(response.data);
      setData(response.data);

      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="characterpage">
      <h2>DISCOVER OUR CHARACTERS</h2>
      <div className="character">
        {data.results.map((results, index) => {
          return (
            <div className="characterbox" key={index}>
              <h3>{results.name}</h3>
              <Link to={`/characters/${results.id}`}>
                <img
                  alt={results.name}
                  src={
                    results.thumbnail.path + "." + results.thumbnail.extension
                  }
                />
              </Link>
              <span>{results.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
