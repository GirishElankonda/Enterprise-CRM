/*
 * Copyright (c) 2026 Girish Elankonda. All rights reserved.
 * Licensed under the MIT License.
 */
import * as React from 'react';
import DatePicker from './DatePicker';

const TimePicker = React.forwardRef((props, ref) => {
  return <DatePicker {...props} picker="time" mode={undefined} ref={ref} />;
});

TimePicker.displayName = 'TimePicker';

export default TimePicker;
