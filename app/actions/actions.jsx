import firebase, {firebaseRef} from 'app/firebase/';

export var setSearchText = (searchText) => {
  return {
    type: "SET_SEARCH_TEXT",
    searchText
  }
};

export var addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    todo
  }
};

export var addTodos = (todos) => {
  return {
    type: "ADD_TODOS",
    todos
  }
};

export var startAddTodo = (todo) => {
  return (dispatch, getState) => {

    var todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  }
};

export var toggleLoading = () => {
  return {
    type:"TOGGLE_LOADING"
  }
}

export var toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id
  }
};

export var toggleShowCompleted = () => {
  return {
    type: "TOGGLE_SHOW_COMPLETED"
  }
};
