

import Link from 'next/link'
import Button from '@mui/material/Button';
import { Dialog, makeStyles } from "@material-ui/core";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import { DialogContent } from '@mui/material';
import { height } from '@mui/system';

const useStyle = makeStyles({
  component:{
   
   
 

    
  }
},
)

const Signup = () => {
  const classes = useStyle();
  return (
    <>
   
        
          <Typography  sx={{fontWeight:470,fontSize:34,  marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',color:"#9a89e3",mt: 1, mb: 2 ,}} className={classes.component} >ashberry</Typography>
        <Card sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border:0.4,
           
            
            
          }}>
          <Box 
          // sx={{
          //   marginTop: 2,
          //   display: 'flex',
          //   flexDirection: 'column',
          //   alignItems: 'center',
          //   border:0.4,
          //   width:400,
          //   height:400,
          //   marginLeft:60,
          //   justifyContent: 'center'
          // }}
          sx={{  marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',mt: 1, mb: 2 , 
              
             }} 
        >
          <h1>Create an new account </h1>
    <Button 
  
              type="submit"
             
              variant="contained"
              sx={{ mt: 23, mb: 2 }}
            >
              Sign In
            </Button>
            <Button>
      
      <Link href="/Login">
            <a>Already have an Account</a>
          </Link>
          </Button>
          </Box>
       
          </Card>
        
          </>
  )
}

export default Signup;
