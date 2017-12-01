import React, { Component } from 'react'
import {connect} from 'react-redux'
import {add, remove, deleteAllReminders} from './actions/actions'
import {Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'
import moment from 'moment'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goal: '',
      date: ''
    }
  }
  getInput(value){
    this.setState({goal: value});
  }
  getDate(value) {
    this.setState({date: value});
  }
  addGoal(){
    this.props.add(this.state);
  }
  showGoal() {
    let masGoal = this.props.reminder.map((item, index) => {
      return (
        <div className='goal'>
        <p key={index}>Your goal: {item.goal}. Goal expires: {moment(new Date(item.date)).fromNow()}</p>
        <Button className='btn removeOne' key={index+1} onClick={(()=>this.props.remove(item.id))}>Delete Goal</Button>
        </div>
      )
    });
    return masGoal;
  }
  deleteAll(){
    this.props.deleteAllReminders();
  }
  render() {
    return (
      <div className="App">
        <form>
          <FormGroup>
            <ControlLabel><h1>Put your future goals</h1></ControlLabel>
            <FormControl
            type='text'
            placeholder='Enter here'
            onChange={(event) => this.getInput(event.target.value)}
            >
            </FormControl>
            <FormControl
              type='datetime-local'
              onChange={(event) => this.getDate(event.target.value)}>
            </FormControl>
          </FormGroup>
          <Button bsStyle='success' className='btn add' onClick={() => this.addGoal()}>Add Goal</Button>
          <Button bsStyle='danger' className='btn removeAll' onClick={()=> this.deleteAll()}>Delete all Goals!</Button>
        </form>
        {this.showGoal()}
        
      </div>
    );
  }
};

function mapStateToProps(state) {
  
  return {
    reminder: state
  }
}

export default connect(mapStateToProps, {add,remove, deleteAllReminders})(App);
