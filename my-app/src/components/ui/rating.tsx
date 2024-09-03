import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

function StarRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box>
      <Rating
        name="star-rating"
      />
    </Box>
  );
}

export default StarRating;
