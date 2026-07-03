/*
 * Copyright (c) 2026 Girish Elankonda. All rights reserved.
 * Licensed under the MIT License.
 */
import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

export default function FeedStoreMock({ method, data }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(method({ data }));
  }, [data]);

  return null;
}
