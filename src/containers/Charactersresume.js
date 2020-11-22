import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Charactersresume = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-backend-20.herokuapp.com/characters/${id}`
        );

        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="charactersresume">
      <h2>{data.results.name}</h2>
    </div>
  );
};

export default Charactersresume;
// `https://marvel-backend-20.herokuapp.com/characters/${id}`
