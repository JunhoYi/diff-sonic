import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

import ListContainer from './List/ListContainer';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

const profileList = [
    {
        'idx' : 1, 
        'name' : 'PC DEFAULT PROFILE',
    }
   
]

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 600,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(1),
      },
  }));

const CustomFormControl = () => {
    const classes = useStyles();
    return (
    <form autoComplete="off">
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="checker-profile" className={classes.root}>사용할 Profile</InputLabel>
                <Select
                inputProps={{
                    name: 'profile',
                    id: 'checker-profile',
                }}
            >
            {profileList.map(c => {
                return <MenuItem value={c.idx}>{c.name}</MenuItem>
                })}
            
            </Select>
        </FormControl>
        <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
            Apply
        </Fab>
    </form>
    );
    
 }

function ProfileList() {
    return (
        <div>
            <Box display="flex" borderRadius="borderRadius" borderColor="grey.500"  border={1} padding={2} my={1}> 
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <CustomFormControl></CustomFormControl>
                </Grid>
                <Grid item xs={4}>
                </Grid>

                <Grid item xs={2}>
                    <FormControlLabel
                        control={
                            // <Switch checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />

                        <Switch value="checkedA" />
                        }
                        label="Check"
                    />
                       <FormControlLabel
                        control={
                            // <Switch checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />

                        <Switch value="checkedA" />
                        }
                        label="Diif"
                    />
                 
                </Grid>
            </Grid>

                        
            </Box>
            <ListContainer></ListContainer>
        </div>
    );
}
export default ProfileList;