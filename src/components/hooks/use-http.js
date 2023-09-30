import React, { useState } from 'react';

const useHttp = () => {
  const [httpError, setHttpError] = useState();
  const [loading, setLoading] = useState(true);

  const sendRequest = async (requestConfig, applyData) => {
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();
      applyData(responseData);

      //   const loadedMeals = []

      //   for(const key in responseData){
      //     loadedMeals.push({
      //       id: key,
      //       name: responseData[key].name,
      //       description: responseData[key].description,
      //       price: responseData[key].price,
      //     })
      //   }

      //   setMeals(loadedMeals)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setHttpError(error.message);
    }
  };

  return {
    loading,
    httpError,
    sendRequest,
  };
};

export default useHttp;
