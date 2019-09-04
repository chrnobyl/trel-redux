import React, { Component } from 'react';
import List from './List';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../actions';
import styled from 'styled-components';
import Confetti from 'react-dom-confetti';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const confettiConfig = {
  angle: 45,
  spread: 180,
  startVelocity: 65,
  elementCount: 150,
  dragFriction: 0.1,
  duration: 3000,
  stagger: 0,
  width: "10px",
  height: "10px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

class App extends Component {

  state = {
    confetti: false
  }

  onDragStart = () => {
    this.setState({
      confetti: false
    })
  }

  onDragEnd = (result) => {
    const { destination, source, draggableID } = result;

    if(!destination){
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableID
      )
    )

    if(destination.droppableId === 'list-2'){
      this.setState({
        confetti: true
      })
    }
  }

  render(){
    const { lists } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}>
        <Confetti active={this.state.confetti} config={confettiConfig} />
        <div style={{textAlign: "center"}}>
          <h3 style={{color: "white"}}>To Do List</h3>
          <ListContainer style={{display: "flex", justifyContent: "center"}}>
            {lists.map(list => <List listID={list.id} key={list.id} title={list.title} cards={list.cards} />)}
          </ListContainer>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
