import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dash = () => {
  
  var[user,setUser]=useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
    setUser(response.data)
    console.log(response.data)
    }).catch(err=>console.log(err))
  })

  return (
    <div style={{paddingTop:'20px'}}>
      <TableContainer>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell style={{color:"violet",fontSize:"20px"}}>ID</TableCell>
                    <TableCell style={{color:"violet",fontSize:"20px"}}>Title</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {user.map((row,index)=>(
                <TableRow key={index}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.title}</TableCell>
                </TableRow>
              ))}
    
        </TableBody>
        </Table>
        </TableContainer>
    </div>
  )
}

export default Dash