import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <div style={{paddingTop:'60px'}}>
        <AppBar sx={{background:"#20BF55"}}>
        <Toolbar>
          <Typography sx={{flexGrow:1}} align ='justify'><Link to={'/'} style={{textDecoration :'none',color:'white',fontSize:'30px'}}>BLOG</Link></Typography> 
          <Button variant='contained'color='secondary'><Link to={'/'} style={{textDecoration :'none',color:'white'}}>DashBoard</Link></Button>&nbsp;        
          <Button variant='contained'color='secondary'><Link to={'/Add'} style={{textDecoration :'none',color:'white'}}>Add</Link></Button> 
        </Toolbar>
        </AppBar>      
    </div>
  )
}

export default Nav