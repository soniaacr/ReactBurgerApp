import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';



function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
       The Burger Bliss
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/Esd1xHfWUp8)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={false} sm={8} md={5} component={Paper} elevation={4} square>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <FastfoodOutlinedIcon sx={{ m:1, bgcolor: 'primary', fontSize:50 }}>
              <FastfoodOutlinedIcon />
            </FastfoodOutlinedIcon>
            <Typography component="h1" variant="h5">
              <h1 className="font-bold text-center">THE BURGER BLISS</h1><br />
              <h3 className="text-center font-semibold">Our Menu:</h3> <br />
              <h3 className="text-center font-bold p-10 text-sm">
              • Double-Double - $7 <br /> <br />
              • Bacon Burger - $10 <br /> <br />
              • Cheeseburger - $6 <br /> <br />
              • Hamburger - $5 <br /> <br />
              • Burger Combo (Burger, Fries and Drink) - $15 <br /> <br />
              • French Fries - $5 <br /> <br />
              • Chilli Cheese Fries - $7 <br /> <br />
              • Sweet Potato Fries - $8 <br /><br />
              • Strawberry, Vanilla, Or Chocolate Milkshake - $4<br /> <br />
              • Regular or Strawberry Lemonade - $4 <br /> <br />
              • Pup Pattie (Safe for dogs) - $5<br /> <br />
             
</h3> <br />
            
            
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
              
         
              <Copyright sx={{ mt: 1 }}/>
  
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
