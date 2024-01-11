import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ValidationTextFields({onChange,name,value}) {
  

  const isValueEmpty = value.trim() === '';

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
          required
          id="outlined-error"
          label={name}
          value={value}
          onChange={onChange}
          error={isValueEmpty}
          helperText={isValueEmpty ? 'Value cannot be empty' : ''}
        />
      
      </div>
      <div>
        {/* Repeat the same pattern for other TextField components */}
      </div>
    </Box>
  );
}
 