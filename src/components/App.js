import React, { Component } from 'react';
import List from './List';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../actions';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {

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

  }
  render(){
    const { lists } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          Hello!!!!!
          <ListContainer>
            {lists.map(list => <List listID={list.id} key={list.id} title={list.title} cards={list.cards} />)}
          </ListContainer>
        </div>
      </DragDropContext>
    );
  }
}

const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row',
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
