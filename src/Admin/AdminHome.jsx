import { Box, Switch } from '@chakra-ui/react'
import React from 'react'
import WithSubnavigation from './AdminNav'
import SimpleSidebar from './Sidebar'
import {Text} from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
// import Blog from './Blog'
const AdminHome = () => {
  return (
    <Box>
      <SimpleSidebar/>
      {/* <Routes>
        <Route path='/blog' component={<Blog/>}/>
      </Routes> */}
    </Box>

  )
}

export default AdminHome