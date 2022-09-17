import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export default function BeepconsGlassItem(props) {

  return (
    <ListItem key={props.package.id} component="div" disablePadding>
      {/* <ListItemButton>
      </ListItemButton> */}
      {props.package.nombre}
    </ListItem>
  );
}