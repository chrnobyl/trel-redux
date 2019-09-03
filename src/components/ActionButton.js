import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import TextArea from 'react-textarea-autosize';

class ActionButton extends Component {
  state = {
    formOpen: false
  }

  openForm = () => {
    this.setState({
      formOpen: true
    })
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

  renderForm = () => {
    const { list } = this.props;

    const placeholder = "Enter a title for this card...";

    const buttonTitle = "Add Card";

    return <div>
      <Card>
        <TextArea />
      </Card>
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
  }
}

export default ActionButton;