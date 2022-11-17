import React from "react";
import { AppBar,Box,Toolbar,Typography,Button,Divider,Drawer,IconButton,ListItemButton,ListItemText } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;
const navItems = ['Inicio', 'Productos', 'Ayuda', 'Contacto'];

import './nav.css';

const NavBar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

const handleDrawerToggle = () => {
  setMobileOpen(!mobileOpen);
};

const drawer = (
  <Box sx={{ textAlign: 'center'}}>
    <Typography variant="h6" sx={{ my: 2, px:2, display:'flex',justifyContent:'space-between' }}>
      Pc Components
      <Button onClick={handleDrawerToggle}>X</Button>
    </Typography>
   
    <Divider />
    <Box>
      {navItems.map((item) => (
     

        <NavLink key={item} to={`/${item.toLowerCase()}` } className={({isActive})=>isActive?'active2' : ''}>
            <ListItemButton><ListItemText>{item}</ListItemText></ListItemButton>
        </NavLink>


      ))}
    </Box>
  </Box>
);
    return (
        <AppBar component="nav" color="primary">
            <Toolbar>
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Pc Components
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <NavLink key={item} to={`/${item.toLowerCase()}`} className={({isActive})=>isActive?'active' : ''}>
                    <Button key={item} sx={{ color: 'inherit' }}>
                        {item}
                    </Button>
                </NavLink>            
              ))}
            </Box>
          </Toolbar>
        
  
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
  
            {/* <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><Logo>WOLF STORE</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/9' style={{textDecoration: "none", color: "white"}}><MenuItem>Sin Alcohol</MenuItem></Link>
                    <Link to='/category/1' style={{textDecoration: "none", color: "white"}}><MenuItem>Vinos</MenuItem></Link>
                    <Link to='/category/5' style={{textDecoration: "none", color: "white"}}><MenuItem>Licores</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem><CartWidget /></MenuItem>
                </Right>
            </Wrapper> */}
        </AppBar>
    );
}

export default NavBar;