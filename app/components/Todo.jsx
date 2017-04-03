var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  render: function() {
    var {menuText, id, completed, createdAt, completedAt, dispatch, withText} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo'

    var renderDate = () => {
      var message = completed ? 'Completed: ' : 'Created: ';
      var timestamp = completed ? completedAt : createdAt;

      return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
    }

    return (
      <div className={todoClassName} onClick={() => {
          dispatch(actions.toggleTodo(id))
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{menuText}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
});

export default connect()(Todo);