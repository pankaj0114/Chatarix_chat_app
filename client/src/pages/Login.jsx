
import React ,{useState, Component} from 'react';


import {Button, Container, Paper, TextField, Typography, Avatar, IconButton, Stack} from "@mui/material";
import {AddAPhoto} from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import {useInputValidation} from '6pp';


const Login = () => {
    


    const[isLogin , setIsLogin] = useState(true);


    const toggleLogin = () => setIsLogin((prev) => !prev);

    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("");
    const password = useInputValidation("");

  return( 
        
    <div
    style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1526554850534-7c78330d5f90?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
    }}
    >

    
  <Container 
  component={"main"} 
  maxWidth="xs"
  
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
                display: "flex",
                flexDirection:"column",
                alignitems:"center",


            }}
        >
            { isLogin ? (<>

        <Typography variant="h5"textAlign={"center"} > Login </Typography>

            <form style={{
                width:"100%",
                marginTop:"1rem",
            }}>
                <TextField 
                required 
                fullWidth 
                label="Username" 
                margin="normal"  
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler} />

   <TextField 
                required 
                fullWidth 
                label="Password" 
                margin="normal"  
                variant="outlined"
                value={password.value} 
                onChange={password.changeHandler}/>

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
            
             ) : (<>

              <Typography variant="h5" textAlign={"center"}> Sign Up </Typography>
      
                  <form style={{
                      width:"100%",
                      marginTop:"1rem",
                  }}>

                   <Stack
                    position={"relative"}
                    width={"10rem"}
                   margin={"auto"}
                   
                    
                    >
                       <Avatar
                    sx={{
                      width:"10rem",
                      height: "10rem",
                      objectFit:"contain",
                     
                     
                    }}
                    />

                    <IconButton
                     sx={
                      {
                        position:"absolute",
                        bottom:"0",
                        right:"0",
                        color:"white",
                        bgcolor: "rgba(0,0,0,0.5)",
                        ":hover":{
                          bgcolor:"rgba(0,0,0,0.7)",
                        },
                      }
                     }
                    
                    component="label"
                    
                    >
                      <>
                      <AddAPhoto />
                      < VisuallyHiddenInput type="file" />


                      </>


                    </IconButton>

                    </Stack>

                  
                    <TextField 
                      required 
                      fullWidth 
                      label="Name" 
                      margin="normal"  
                      variant="outlined" 
                      value={name.value}
                      onChange={name.changeHandler}
                      />

                    <TextField 
                      required 
                      fullWidth 
                      label="Bio" 
                      margin="normal"  
                      variant="outlined" 
                      value={bio.value}
                      onChange={bio.changeHandler}/>

                      <TextField 
                      required 
                      fullWidth 
                      label="Username" 
                      margin="normal"  
                      variant="outlined"
                      value={username.value}
                      onChange={username.changeHandler} />
      
         <TextField 
                      required 
                      fullWidth 
                      label="Password" 
                      margin="normal"  
                      variant="outlined"
                      value={password.value}
                      onChange={password.changeHandler} />
      
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
                              Sign Up
                  </Button> 
      
                  <Typography textAlign={"center"} m={"1rem"}>
                      OR</Typography>  
      
                      <Button
                      sx={{
                         
                      }}
                      fullWidth
                      variant="text"
                      onClick={toggleLogin} > Login Instead </Button>
                  </form>
                  
                  </>
                  )}
    </Paper>
  </Container>
  </div>
  );
};

export default Login;