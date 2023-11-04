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
            backgroundImage: 'url(https://source.unsplash.com/1w5-s4Yw4IM)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={4} square>
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
              <h3 className="text-center font-semibold">About Us:</h3>
              <p className="text-center p-4 text-sm">
              Introducing the ultimate destination for burger enthusiasts and connoisseurs of savory delights, <br />
              our brand-new online burger place! We are excited to welcome you to a digital culinary adventure that promises to redefine your burger experience. <br /> <br />
              At our virtual grill, we take the art of burger making to the next level. Our commitment to quality and taste is unwavering, <br />
              and we source the freshest, handpicked ingredients to craft each burger with love and expertise. <br />
              Whether you're a meat enthusiast, a vegetarian, or an adventurous foodie, our menu boasts a delectable variety to cater to your unique preferences.
          </p> <br />
             <p className="text-center p-4 text-sm">
             We understand that time is precious, and the demand for culinary excellence is non-negotiable. With just a few clicks, you can now indulge in the burger of your dreams, <br />
             carefully prepared and delivered right to your doorstep. Our mission is not just to satisfy your hunger but to elevate your dining experience, <br /> <br />
             whether it's a quick lunch, a family dinner, or a weekend treat. <br /> 
             So, why settle for ordinary when you can embark on an extraordinary burger journey with us? <br />
             Welcome to our virtual burger haven, where every bite is a testament to our passion for great food, and every order is an opportunity <br />
              to make your taste buds sing. Get ready to discover a world of flavor, all from the comfort of your own space. <br />
              Your burger adventure begins here!

</p> <br />
            <h3 className="text-center p-4 font-semibold">Your burger adventure begins here!</h3>  
            
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
              
         
              <Copyright sx={{ mt: 5 }}/>
  
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

