
import React ,{useState, Component} from 'react';


import {Button, Container, Paper, TextField, Typography} from "@mui/material";
import { color } from 'framer-motion';


const Login = () => {
    


    const[isLogin , setIsLogin] = useState(true);

    const toggleLogin = () => setIsLogin(false);
  return( 
        
    <div
    style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1526554850534-7c78330d5f90?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
    }}
    >

    
  <Container component={"main"} maxWidth="xs"
  
  sx={{
    height: "100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    
  }}>
    
    <Paper
        elevation={3}
        sx={{
                padding: 4,
                display: "Flex",
                flexDirection:"column",
                alignitems:"center",


            }}
        >
            { isLogin ? (<>

        <Typography variant="h5"> Login </Typography>

            <form style={{
                width:"100%",
                marginTop:"1rem",
            }}>
                <TextField 
                required 
                fullWidth 
                label="Username" 
                margin="normal"  
                variant="outlined" />

   <TextField 
                required 
                fullWidth 
                label="Password" 
                margin="normal"  
                variant="outlined" />

           <Button
              sx={
                {
                    marginTop:"1rem",
                }
              } variant="contained" 
                    color="primary" 
                    type="submit"
                    fullWidth
                    >
                        Login
            </Button> 

            <Typography textAlign={"center"} m={"1rem"}>
                OR</Typography>  

                <Button
                sx={{
                   
                }}
                fullWidth
                variant="text"
                onClick={toggleLogin} >Sign Up Instead </Button>
            </form>
            
            </>
            
             ) : (<span>register</span>)}
    </Paper>
  </Container>
  </div>
  );
};

export default Login;