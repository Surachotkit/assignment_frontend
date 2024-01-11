import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerValue({ disabled, valueStart, valueEnd, onChange }) {
  const today = dayjs();

  const [test, setTest] = React.useState(null);
  // console.log("🚀 ~ DatePickerValue ~ test:", test.format("DD/MM/YYYY") )
  const [test2, setTest2] = React.useState(null);
  // console.log("🚀 ~ DatePickerValue ~ test2:", test2.format("DD/MM/YYYY") )

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label="Start"
          value={test} // Use the state variable directly
          defaultValue={today}
          minDate={today}
          onChange={(date) => {
            setTest(date); // Update the state with the selected date
            onChange(date, valueEnd);
          }}
          disabled={disabled}
        />
        <DatePicker
          label="End"
          value={test2} // Use the state variable directly
          minDate={valueStart || today}
          onChange={(date) => {
            setTest2(date); // Update the state with the selected date
            onChange(valueStart, date);
          }}
          disabled={disabled}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
