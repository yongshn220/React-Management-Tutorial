import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer';
import { Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})
const customers = 
[
  {
  'id':1,
  'image': 'https://placeimg.com/64/64/1',
  'name': "yongjung",
  'birthday': "990306",
  'gender': 'male',
  'job': "student"
  },
  {
    'id':2,
    'image': 'https://placeimg.com/64/64/2',
    'name': "hun",
    'birthday': "790306",
    'gender': 'female',
    'job': "student"
  },
  {
    'id':3,
    'image': 'https://placeimg.com/64/64/3',
    'name': "park",
    'birthday': "890306",
    'gender': 'female',
    'job': "student"
  }
]
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Num</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Birth</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Job</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> )})}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
  