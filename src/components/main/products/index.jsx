import React from 'react'
import { NavLink } from 'react-router-dom';
import {Divider,Button,Menu,MenuItem } from "@mui/material";
import ItemListContainer from './ItemListContainer';

import { styled, alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import getProducts from "../../../helpers/getProducts";

import './products.css'
import { useState } from 'react';
import { useEffect } from 'react';
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [date, setDate] = useState([]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  useEffect(() => {
    getProducts('products','createAt','desc')
        .then(result => setDate(result))
        .catch(err => console.log(err))
}, []);


  let category={}
   const newCategory=date.filter(o => category[o.category.id] ? false : category[o.category.id] = true).map(c=>c.category)


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
        {
          newCategory.map(category=>
              <NavLink key={category.id} to={`/productos/category/${category.id}`}>
                <MenuItem onClick={handleClose} disableRipple>
                  <span>{category.name}</span>
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
              </NavLink>
              )
          
        }
      </StyledMenu>
      <ItemListContainer date={date}/>
    </div>
  )
}

export default Products