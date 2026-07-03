/*
 * Copyright (c) 2026 Girish Elankonda. All rights reserved.
 * Licensed under the MIT License.
 */
import { useEffect, useState } from 'react';

export default function useNetwork() {
  const [isOnline, setNetwork] = useState(window.navigator.onLine);
  useEffect(() => {
    setNetwork(window.navigator.onLine);
  }, [window.navigator.onLine]);
  return [isOnline];
}
