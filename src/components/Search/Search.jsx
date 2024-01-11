// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function CustomizedInputBase({name,onChange,value}) {
  return (
    <>   
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={name}
        inputProps={{ 'aria-label': 'search google maps' }}
        value={value}
        onChange={onChange}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>

    </Paper>
    </>
  );
}
