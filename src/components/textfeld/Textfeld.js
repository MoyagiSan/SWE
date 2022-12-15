import React from 'react'
import { FormControl, FormHelperText, Input, InputLabel, TextField } from '@mui/material'
import { useState} from 'react';
import Bücher from '../bücher/Bücher';
import { Button } from '@mui/material'
import { FormGroup } from '@mui/material'
import {FormControlLabel} from '@mui/material'
import {Checkbox} from '@mui/material'


const Textfeld = () => {

  const [state, setState] = useState({ sw: '', checkb:false});

 
  function suchen() {
    console.log("funktioniert")

   /* bl.length = 0;
    for (let i = bl.length; i > 0; i--) {
      bl.pop();
    }*/

      let nurLieferbar = false;

      let suchwort = document.querySelector('#dInput').value;

      if (document.querySelector('#dCheck').checked) {
          nurLieferbar = true;
      }

      setState({ sw: suchwort, checkb: nurLieferbar });
   
  };

  return (
<div>
  <FormControl>
    <InputLabel htmlFor="my-input">Suche...</InputLabel>
    <Input id="dInput" aria-describedby="my-helper-text" />
    <FormHelperText id="my-helper-text">Gib deine Suche ein</FormHelperText>
  </FormControl>

  <Button onClick={suchen} variant="outlined">Suche</Button>

  <FormGroup>
  <FormControlLabel control={<Checkbox id='dCheck' />} label="Nur verfügbare Bücher anzeigen" />
  </FormGroup>

  <Bücher suchwort={state.sw} checkb={state.checkb}/>
  </div>
  )
}

export default Textfeld