import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import TextArea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { addCard } from '../actions';

class ActionButton extends Component {
  state = {
    formOpen: false,
    text: ''
  }

  openForm = () => {
    this.setState({
      formOpen: true
    })
  }

  closeForm = (e) => {
    this.setState({
      formOpen: false
    })
  }

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;

    if(text){
      this.setState({
        text: ""
      });
      dispatch(addCard(listID, text))
    }
  }

  renderAddButton = () => {
    return (
      <div
        onClick={this.openForm}
        style={styles.actionButton}>
        <Icon>add</Icon>
        <p>Add another card</p>
      </div>
    )
  }

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value
    })

  }

  renderForm = () => {
    const { list } = this.props;

    const placeholder = "Enter a title for this card...";

    const buttonTitle = "Add Card";

    return <div>
      <Card style={{
        overflow: "visible",
        minHeight: 80,
        minWidth: 272,
        padding: "6px 8px 2px"
      }}>
        <TextArea
          placeholder={placeholder}
          autoFocus
          onBlur={this.closeForm}
          value={this.state.text}
          onChange={this.handleInputChange}
          style={{
            resize: "none",
            width: "100%",
            outline: "none",
            border: "none",
            overflow: "hidden"
          }}/>
      </Card>
      <div style={styles.formButtonGroup}>
        <Button 
          onMouseDown={ this.handleAddCard }
          variant="contained"
          style={{ 
            color: "white",
            backgroundColor: "green"
          }}>
          {buttonTitle}{' '}
        </Button>
        <Icon style={{ marginLeft: 8, cursor: 'pointer' }}>
          close
        </Icon>
      </div>
    </div>
  }

  render(){
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  actionButton: {
    opacity: 0.5,
    color: 'inherit',
    backgroundColor: 'inherit',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  },
  formButtonGroup: {
    marginTop: 8,
    display: 'flex',
    alignItems: 'center'
  }
}

export default connect()(ActionButton);