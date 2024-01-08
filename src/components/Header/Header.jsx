import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function ButtonAppBar() {
  return (
   <Box sx={{ flexGrow: 1, width: '100%', position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
      <AppBar position="static" sx={{  width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <Toolbar>
        
          <Typography variant="h4" component="div" sx={{flexGrow: 1, display:'flex'}}>
            LOGO
          </Typography>
          <Button color="inherit">Amethyst-sols</Button>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
