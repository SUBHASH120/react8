
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';



const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
  

 function Material(props) {
    const [checked, setChecked] = React.useState(true);
    const handleChange = event => {
        setChecked(event.target.checked);
      };

    return(
        <div >
         <Checkbox
        checked={checked}
        onChange={handleChange}
        value="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Checkbox
        defaultChecked
        value="secondary"
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Checkbox value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
      <Checkbox disabled value="disabled" inputProps={{ 'aria-label': 'disabled checkbox' }} />
      <Checkbox
        disabled
        checked
        value="disabled checked"
        inputProps={{ 'aria-label': 'disabled checked checkbox' }}
      />
      <Checkbox
        defaultChecked
        value="indeterminate"
        indeterminate
        inputProps={{ 'aria-label': 'indeterminate checkbox' }}
      />
      <Checkbox
        defaultChecked
        color="default"
        value="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
      <Checkbox
        defaultChecked
        size="small"
        value="small"
        inputProps={{ 'aria-label': 'checkbox with small size' }}
      />
        </div>
    );


}
export default Material;
