import React from 'react'
import { NavLink } from 'react-router-dom';
import {Divider,Button,Menu,MenuItem } from "@mui/material";
import ItemListContainer from './ItemListContainer';

import { styled, alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import './products.css'
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))
(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 300,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));
const Products = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (

    <div className='main-products'>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{mx:6}}
      >
        Categorias
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <NavLink to='/productos/category/1'>
          <MenuItem onClick={handleClose} disableRipple>
                  <span>Teclado y mouse</span>
          </MenuItem>
          
        </NavLink>
        <Divider sx={{ my: 0.5 }} />
        <NavLink to='/productos/category/2' >
          <MenuItem onClick={handleClose} disableRipple>
                  <span>Mothers y combos</span>
          </MenuItem>
        </NavLink>
        <Divider sx={{ my: 0.5 }} />
        <NavLink to='/productos/category/3'>
          <MenuItem onClick={handleClose} disableRipple>
                <span>Placas de video</span>
          </MenuItem>
        </NavLink> 
        <Divider sx={{ my: 0.5 }} />
        <NavLink to='/productos/category/4' >
          <MenuItem onClick={handleClose} disableRipple>
                <span>Equipos y Notebooks</span>
          </MenuItem>
        </NavLink>
      </StyledMenu>
      <ItemListContainer/>
    </div>
  )
}

export default Products