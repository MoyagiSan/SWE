import React from 'react'
import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import { useState} from 'react';
import Bücher from '../bücher/Bücher';
import { Button } from '@mui/material'
import { FormGroup } from '@mui/material'
import {FormControlLabel} from '@mui/material'
import {Checkbox} from '@mui/material'

const Textfeld = () => {

  const [state, setState] = useState({ sw: '', checkb: false});

  function suchen() {
      let available = document.querySelector('#dCheck').checked
      let search = document.querySelector('#dInput').value

      setState({ sw: search, checkb: available });
  }

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="my-input">Suche...</InputLabel>
        <Input id="dInput" aria-describedby="my-helper-text" onInput={suchen} />
        <FormHelperText id="my-helper-text">Gib deine Suche ein</FormHelperText>
      </FormControl>

      <Button onClick={suchen} variant="outlined">Suche</Button>

      <FormGroup>
        <FormControlLabel control={<Checkbox onChange={suchen} id='dCheck' />} label="Nur verfügbare Bücher anzeigen" />
      </FormGroup>

      <Bücher suchwort={state.sw} checkb={state.checkb}/>
    </div>
  )
}

export default Textfeld