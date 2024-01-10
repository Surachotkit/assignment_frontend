import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Date from "../Calendar/Date";

export default function RowRadioButtonsGroup() {
  const [selectedValue, setSelectedValue] = React.useState("แสดง"); // Default to 'ไม่แสดง'

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const today = dayjs();
  const [selectedDateRange, setSelectedDateRange] = React.useState([
    null,
    null,
  ]);

  return (
    <div style={{display: 'flex', width: '800px'}}>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          ระยะเวลาแสดงผลงานให้ผู้อื่นเห็น
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={selectedValue}
          onChange={handleChange}
        >
          <FormControlLabel
            value="ไม่แสดง"
            control={<Radio />}
            label="ไม่แสดง"
          />
          <FormControlLabel value="แสดง" control={<Radio />} label="แสดง" />
        </RadioGroup>
      </FormControl>
      <div style={{display: 'flex'}}>

      {selectedValue === "แสดง" ? <Date /> : <Date disabled={"disabled"} />}
      </div>
    
    </div>
  );
}

// import * as React from 'react';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import TextField from '@mui/material/TextField';

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';

// export default function RowRadioButtonsGroup() {
//   const [selectedValue, setSelectedValue] = React.useState('female'); // Default to 'ไม่แสดง'

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   ///
//   const today = dayjs();
//   const [selectedDateRange, setSelectedDateRange] = React.useState([null, null]);

//   return (
//     <div>
//       <FormControl>
//         <FormLabel id="demo-row-radio-buttons-group-label">ระยะเวลาแสดงผลงานให้ผู้อื่นเห็น</FormLabel>
//         <RadioGroup
//           row
//           aria-labelledby="demo-row-radio-buttons-group-label"
//           name="row-radio-buttons-group"
//           value={selectedValue}
//           onChange={handleChange}
//         >
//           <FormControlLabel value="female" control={<Radio />} label="ไม่แสดง" />
//           <FormControlLabel value="male" control={<Radio />} label="แสดง" />
//         </RadioGroup>
//       </FormControl>

//       {/* Conditionally render the date picker based on the selected value */}
//       {selectedValue === 'male' && (
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DatePicker
//         minDate={today}
//         value={selectedDateRange}
//         onChange={(newValue) => setSelectedDateRange(newValue)}
//         disabled
//       />
//       </LocalizationProvider>
//       )}
//     </div>
//   );
// }
