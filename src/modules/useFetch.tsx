import { useState, useEffect } from 'react';

type Ingredients = {};

// Generated by https://quicktype.io

export type Data = {
  name: string;
  icon: Icon;
  measure: Measure;
  id?: string;
};

type Icon = {
  name: string;
  url: string;
};

type Measure = {
  units: Unit[];
};

type Unit = {
  perPortion: number;
  name: string;
};

export default function useFetch(url: string) {
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState<null | Data[]>(null); //:Data
  const [loadingState, setLoadingState] = useState<
    'idle' | 'loading' | 'loaded'
  >('idle');

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          setLoadingState('idle');
          throw new Error('something went wrong');
        }
        setLoadingState('loading');
        return response.json();
      })
      .then(apiData => {
        setError(null);
        setLoadingState('loaded');
        setData(apiData);
      })
      .catch(err => {
        setData(null);
        setLoadingState('idle');
        setError(err.message);
      });
  }, [url]);
  return {
    data,
    error,
    loadingState,
    setData,
  };
}