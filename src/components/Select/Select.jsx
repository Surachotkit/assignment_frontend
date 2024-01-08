import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'กิจกรรม',
    label: 'กิจกรรม',
  },
  {
    value: 'จิตรกรรม',
    label: 'จิตรกรรม',
  },
  {
    value: 'ศิลปกรรม',
    label: 'ศิลปกรรม',
  },
  {
    value: 'สื่อวิดิโอ',
    label: 'สื่อวิดิโอ',
  },
];

export default function SelectTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          defaultValue="กิจกรรม"
    
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

      </div>
    </Box>
  );
}
