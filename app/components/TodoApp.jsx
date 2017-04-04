var React = require('react');

//Components
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

//Helpers
var uuid = require('node-uuid');
var moment = require('moment');

var TodoApp = React.createClass({
    render: function () {
      return (
        <div>
          <h1 className="page-title">Todo App</h1>
          <div className="row">
            <div className="column small-11 medium-6 large-3">
              <TodoList/>
            </div>
            <div className="column small-11 medium-6 large-9">
              <div className="container">
                <TodoSearch/>
                <AddTodo/>
              </div>
            </div>
          </div>
        </div>
      )
    }
})

module.exports = TodoApp;
