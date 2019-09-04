import React from 'react';
import ListCard from './ListCard';
import ActionButton from './ActionButton';

const List = ({ title, cards }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      { cards.map(card => <ListCard key={card.id} text={card.text} />) }
      <ActionButton />
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8,
    height: '100%'
  }
}

export default List;