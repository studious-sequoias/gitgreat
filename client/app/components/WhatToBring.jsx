//Child component within the Event Planning component
//Allows users to create a list of items that need to be brought to an event;
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { browserHistory } from 'react-router';

class WhatToBring extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [{item: 'mashed potatoes', cost: '20', owner: 'Jenn'}],
      currentItem: null,
      currentOwner: null,
      currentCost: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleCostChange = this.handleCostChange.bind(this);
    this.handleOwnerChange = this.handleOwnerChange.bind(this);
    this.fetchItems = this.fetchItems.bind(this);
  }
  componentDidMount() {
    this.fetchItems();
  }

  fetchItems() {
    //The event name is passed along to the server via query parameters
    //so that we can display the itemlist associated with a specific event
    var eventParam = sessionStorage.getItem('eventId');
    var successHandler = function(data) {
      this.setState({itemList: data});
    };
    $.ajax({
      method: 'GET',
      url: '/itemList?eventName=' + eventParam,
      success: successHandler.bind(this)
    });
  }

  handleSubmit(event) {
    //The event name is passed along to the server via query parameters
    //so that we can post to the itemlistTable associated with a specific event
    var item = {
      item: this.state.currentItem,
      cost: this.state.currentCost,
      owner: this.state.currentOwner
    };
    var successHandler = function(data) {
      this.fetchItems();
    };
    var eventParam = sessionStorage.getItem('eventId');
    $.ajax({
      method: 'POST',
      url: '/itemList?eventName=' + eventParam,
      data: JSON.stringify(item),
      contentType: 'application/json',
      success: successHandler.bind(this)
    });
    event.preventDefault();
  }

  handleItemChange(event) {
    this.setState({
      currentItem: event.target.value
    });
  }
  handleOwnerChange(event) {
    this.setState({
      currentOwner: event.target.value
    });
  }
  handleCostChange(event) {
    this.setState({
      currentCost: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form className="bringForm" onSubmit={this.handleSubmit}>
          <label>
            Owner:
          <input type='text' name='owner'
            onChange={this.handleOwnerChange}
          />
          </label>
          <label>
            Item:
            <input type='text' name='item'
              onChange={this.handleItemChange}
            />
          </label>
          <label>
            Cost:
            <input type='text' name='cost'
              onChange={this.handleCostChange}
            />
          </label>
          <input type="submit" value="Submit" className="btn"/>
        </form>
        <table className="bringTable featureBody">
          <thead>
            <tr>
              <th>Owner</th>
              <th>Item</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {this.state.itemList.map( (item, index) =>
              <tr key={index}>
                <th>{item.owner}</th>
                <th>{item.item}</th>
                <th>{item.cost}</th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default WhatToBring;