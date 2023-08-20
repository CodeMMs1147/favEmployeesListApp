import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import { CustomDialog } from '../CustomDialog';
import { FavoriteTable } from '..';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';

export type NavBarProps = object

const NavBar: React.FC<NavBarProps> = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true
  }
  useSelector((store: AppStore) => store.favorites);

	return (
  <>
    <CustomDialog>
      <FavoriteTable />
    </CustomDialog>
      <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CodeMMs Favorite Employees App
            </Typography>
            <IconButton color="secondary" aria-label="upload picture" component="label" onClick={handleClick}>  
              <FavoriteIcon />
            </IconButton>
          </Toolbar>
      </AppBar>
  </>
	);
};

export default NavBar;
