/*
 * Copyright (c) 2026 Girish Elankonda. All rights reserved.
 * Licensed under the MIT License.
 */
import React from 'react';

import { CrudContextProvider } from '@/context/crud';

function DefaultLayout({ children }) {
  return <CrudContextProvider>{children}</CrudContextProvider>;
}

export default DefaultLayout;
