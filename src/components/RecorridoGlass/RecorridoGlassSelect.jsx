import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './RecorridoGlassSelect.css'
import Punto from '../TurnoGlass/Punto';

export default function BeepconsGlassItem(props) {
  const [userInput, setUserInput] = React.useState(props.package.id);
  console.log(userInput);
  return (
    <ListItem key={props.package.id} component="div" disablePadding className='item'>
      {/* <ListItemButton>
      </ListItemButton> */}
      <Punto color="#fff"></Punto>
      <div className='item__text'>
      {props.package.nombre}
      </div>
      <div className='checkbox'>
        <input type="checkbox" value={userInput}
                onChange={(e) => {
                  setUserInput({ ...userInput, id: e.target.value }),
                  console.log(userInput);
                }}/>
      </div>
    </ListItem>
  );
}