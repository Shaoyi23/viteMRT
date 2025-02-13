import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <div>
        <Button component={Link} to="/filter" variant="contained" color="primary">
          Go to Filter Table
        </Button>
        <Button component={Link} to="/edit" variant="contained" color="secondary">
          Go to Edit Table
        </Button>
      </div>
    </div>
  );
};

export default HomePage;