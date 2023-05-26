import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (

        <div style={{paddingTop:'60px'}}>
          <h1 style={{color:'violet'}}>ADD YOUR BLOG</h1>      
          <br/>
          <TextField variant='outlined' label='Blog Name'></TextField>
          <br/>
          <br/>
          <TextField variant='outlined' label='Description'></TextField>
          <br/>
          <br/>
          <TextField variant='outlined' label='Author'></TextField>
          <br/>
          <br/>
          <Button variant='contained' color='secondary'>Submit</Button>
          <br/><br/>
        </div>
  )
}

export default Add