/*
 * Copyright (c) 2026 Girish Elankonda. All rights reserved.
 * Licensed under the MIT License.
 */
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generateCalendar from 'antd/lib/calendar/generateCalendar';
import 'antd/lib/calendar/style';

const Calendar = generateCalendar(dayjsGenerateConfig);

export default Calendar;
