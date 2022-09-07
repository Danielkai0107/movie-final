import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuList from './MenuList';

export default function TemporaryDrawer() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuBtn = (e) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={handleMenuBtn}>
          <MenuIcon sx={{ color: '#fff', width: 26, height: 26 }} />
        </IconButton>
        <Drawer
          anchor="right"
          open={menuOpen}
          onClose={handleMenuBtn}
          sx={{
            position: 'absolute',
            top: '0',
            right: '0',
            '&	.MuiDrawer-paper': {
              backgroundColor: 'transparent',
              backdropFilter: 'brightness(250%) saturate(150%) blur(25px)',
            },
          }}
        >
          <MenuList setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        </Drawer>
      </React.Fragment>
    </div>
  );
}
