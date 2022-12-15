import React from 'react'
import { Button } from '@mui/material'
import { useState} from 'react';
import { setState } from 'react';

const Knopf = () => {

  function suchen() {
    let nurLieferbar = false;

    let suchwort = document.querySelector('#dInput').value;

    if (document.querySelector('#dCheck').checked) {
        nurLieferbar = true;
    }

    setState({ sw: suchwort, checkb: nurLieferbar });
 
};
  return (
    <Button onClick={suchen} variant="outlined">Suche</Button>
  )
}

export default Knopf