import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Draggable } from 'react-beautiful-dnd';

const ListCard = ({text, id, index}) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
    {provided => (
      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <Card style={styles.cardContainer}>
          <Typography gutterBottom>
            <CardContent>{text}</CardContent>
          </Typography>
        </Card>
      </div>
    )}
    </Draggable>
  )
}

const styles = {
  cardContainer: {
    marginBottom: 8
  }
}

export default ListCard;