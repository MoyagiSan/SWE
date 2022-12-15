import { ListItemButton } from '@mui/material'
import React from 'react'
import {ListItemText} from '@mui/material'
import { books } from '../../data';
import bl from '../textfeld/Textfeld';

const Bücher = (props) => {

    let suchwort = props.suchwort;

    let nbl=[];
      
    for (let i = 0; i < books.length; i++) {

        if (
            ((books[i].autor == props.suchwort || books[i].titel == props.suchwort|| books[i].isbn == props.suchwort) && (!props.checkb || (props.checkb && books[i].lieferbar)))
        ) {

            nbl.push(<ul key={i} > <li className="btitel">{books[i].autor}:&nbsp;
                {books[i].titel} &nbsp;
                {books[i].preis} Euro</li></ul>);

        }
    }

  return (
    <div className="mx-auto ">
       {nbl}
    </div>
  )
}

export default Bücher