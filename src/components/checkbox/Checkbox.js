import React from 'react'
import { FormGroup } from '@mui/material'
import {FormControlLabel} from '@mui/material'
import {Checkbox} from '@mui/material'

const Checkboxx = () => {
  return (
<FormGroup>
  <FormControlLabel control={<Checkbox />} label="Nur verfügbare Bücher anzeigen" />
</FormGroup>
  )
}

export default Checkboxx
