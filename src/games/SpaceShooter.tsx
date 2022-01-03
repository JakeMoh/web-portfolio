import {Avatar, Typography, Container, Input} from '@mui/material';
import { useState, useEffect } from 'react';

function SpaceShooter() {
  const [key, setKey] = useState('');

  useEffect(() => {
    // handle what happens on key press
    const handleKeyPress = (event: KeyboardEvent) => {
      setKey(event.key);
    };

    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [key]);

  return (
    <Container>
      <Typography variant="h1">Game Page {key}</Typography>
      
    </Container>
  );
}

export default SpaceShooter;