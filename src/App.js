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

            setData(result);
            console.log(data);
            console.log(result);
            setIsLoading(false);
            console.log("Loaded",isLoading)
        };

        fetchData();
    }, []);

    return (
      <div className="container">
          <Loader />
      </div>
    );
}

export default App;
