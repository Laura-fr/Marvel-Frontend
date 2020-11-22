import React, { useState, useEffect } from "react";
import axios from "axios";

const Comics = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://marvel-backend-20.herokuapp.com/comics"
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
    <div className="comicspage">
      <h2>DISCOVER OUR COMICS</h2>
      <div className="comics">
        {data.results.map((results, index) => {
          return (
            <div className="comicsbox" key={index}>
              <h3>{results.title}</h3>

              <img
                alt={results.title}
                src={results.thumbnail.path + "." + results.thumbnail.extension}
              />
              <span>{results.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
