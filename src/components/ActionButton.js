import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import TextArea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import styled from 'styled-components';

const ActionButtonContainer = styled.div`
  opacity: 0.5;
  color: inherit;
  background-color: inherit;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  height: 36px;
  width: 272px;
  padding-left: 10px;
`

const ButtonGroupContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
`

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
      <ActionButtonContainer
        onClick={this.openForm}>
        <Icon>add</Icon>
        <p>Add another card</p>
      </ActionButtonContainer>
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
      <ButtonGroupContainer>
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
      </ButtonGroupContainer>
    </div>
  }

  render(){
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

export default connect()(ActionButton);
