import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Quiz() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/question/1")
      .then((response) => {
        console.log(response)
        setData(response.data); 
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Fetching data failed', err);
        setIsLoading(false);
      })
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Hello here is you data...
      <div>{JSON.stringify(data, null, 2)}</div>
    </div>
  );
}

export default Quiz;
