import React, { useState, useEffect } from 'react';
import {getData} from './utils/utils';
import Loader from "./Loader/Loader";

const App = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            console.log("Loaded",isLoading)
            const result = await getData();

            setData(result.data);
            console.log(data);
            console.log(result.data);
            setIsLoading(false);
            console.log("Loaded",isLoading)
        };

        fetchData();
    }, []);

    return (
      <div className="container">
          {
              isLoading ?
              <Loader />
              :
              <p>Данные загружены!!!</p>
          }
      </div>
    );
}

export default App;
