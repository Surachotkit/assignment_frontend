// import * as React from 'react';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';

// export default function FirstComponent({disabled}) {

//   const today = dayjs();
//   const [selectedDateRange, setSelectedDateRange] = React.useState([null, null]);


//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker 
//         minDate={today} 
//         value={selectedDateRange}
//         onChange={(newValue) => setSelectedDateRange(newValue)}
//         disabled={disabled} 
//       />
//     </LocalizationProvider>
//   );
// }





import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerValue({disabled}) {
  const [value, setValue] = React.useState([]);
  const today = dayjs();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker label="Start" defaultValue={[]} minDate={today}  disabled={disabled} />
        <DatePicker
          minDate={today} 
          label="End"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          disabled={disabled}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

