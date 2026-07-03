/*
 * Copyright (c) 2026 Girish Elankonda. All rights reserved.
 * Licensed under the MIT License.
 */
import React from 'react';

import { ErpContextProvider } from '@/context/erp';

function ErpContextLayout({ children }) {
  return <ErpContextProvider>{children}</ErpContextProvider>;
}

export default ErpContextLayout;
