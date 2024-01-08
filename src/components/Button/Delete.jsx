/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons({ onDeleteClick, name1, name2 }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => onDeleteClick(name1)}>
        {name1}
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => onDeleteClick(name2)}>
        {name2}
      </Button>
    </Stack>
  );
}
