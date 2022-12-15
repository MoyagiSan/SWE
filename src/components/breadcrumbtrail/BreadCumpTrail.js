import React from 'react'
import './breadCrumpTrail.css'
import { Breadcrumbs } from '@mui/material'
import {Link} from '@mui/material'



const BreadCumpTrail = () => {
  return (
  <div>
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">Startseite</Link>
      <Link underline="hover" color="inherit" href="/"> Irgendeine andere Seite </Link>
      <Link underline="hover" color="inherit" href="/"> Irgendeine weitere Seite </Link>
    </Breadcrumbs>
  </div>
  )
}

export default BreadCumpTrail