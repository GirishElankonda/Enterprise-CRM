/*
 * Copyright (c) 2026 Girish Elankonda. All rights reserved.
 * Licensed under the MIT License.
 */
import React from 'react';
import { Spin } from 'antd';

const PageLoader = () => {
  return (
    <div className="centerAbsolute">
      <Spin size="large" />
    </div>
  );
};
export default PageLoader;
