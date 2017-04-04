var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var classNames = require('classnames');

import moment from 'moment';

export var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var menuText = this.refs.menuText.value;
    var action = this.refs.action.value;
    var {dispatch} = this.props;
    var invalidFieldsList = {};

    if(menuText.length <= 0) { invalidFieldsList["menuText"] = this.refs.menuText };
    if(action == "none") { invalidFieldsList["action"] = this.refs.action };

    for (var prop in invalidFieldsList) {
      this.setState(invalidFieldsList);
      return
    }

    var menuItem = {
      action,
      menuText,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    }

    dispatch(actions.startAddTodo(menuItem));
    this.refs.menuText.value = "";
    this.refs.action.value = "none";
  },
  render: function () {
    var invalidFields = this.state;
    var errorText = classNames({
          'error': invalidFields != null && invalidFields["menuText"] != undefined
    });

    var errorDropDown = classNames({
          'error': invalidFields != null && invalidFields["action"] != undefined
    });

    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit}>
          <input className={errorText} type="text" ref="menuText" placeholder="Menu text"/>
          <select className={errorDropDown} name="Action" ref="action" defaultValue="none">
            <option value="none">Choose menu item action</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="settings">Settings</option>
          </select>
          <button className="button expanded">Submit to-do</button>
        </form>
      </div>
    )
  }
});

export default connect()(AddTodo);
