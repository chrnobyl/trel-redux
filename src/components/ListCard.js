import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'

const ListCard = ({text}) => {
  return (
    <Card style={styles.cardContainer}>
      <Typography gutterBottom>
        <CardContent>{text}</CardContent>
      </Typography>
    </Card>
  )
}

const styles = {
  cardContainer: {
    marginBottom: 8
  }
}

export default ListCard;