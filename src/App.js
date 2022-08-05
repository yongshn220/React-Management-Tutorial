import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

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
    return (
      <div>
        {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> )})}
      </div>
    );
  }
}

export default App;
  