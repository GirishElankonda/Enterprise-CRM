/*
 * Copyright (c) 2026 Girish Elankonda. All rights reserved.
 * Licensed under the MIT License.
 */
import { useState, useEffect } from 'react';

export default function useFetch(fetchingFn) {
  const [result, setResult] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    const data = await fetchingFn();
    if (data.success === true) {
      setIsSuccess(true);
      setResult(data.result);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { result, isSuccess, isLoading };
}
