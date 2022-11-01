import { createReducer, on } from '@ngrx/store'
import { Todo } from './models/todo.model'
import {
  create,
  update,
  changeStatus,
  remove,
  clearCompleted,
  order
} from './todo.actions'

export const initialState: Todo[] = [
  new Todo('My first todo', true),
  new Todo('My second todo'),
  new Todo("It's a tramp"),
  new Todo("I'm your father")
]

export const todoReducer = createReducer(
  initialState,

  on(create, (state, { text, isComplete }) => [
    ...state,
    new Todo(text, isComplete)
  ]),

  on(changeStatus, (state, { id }) => {
    return state.map(todo => {
      if (todo.id !== id) return todo

      return {
        ...todo,
        isComplete: !todo.isComplete
      }
    })
  }),

  on(update, (state, { id, text }) => {
    return state.map(todo => {
      if (todo.id !== id) return todo

      return {
        ...todo,
        text
      }
    })
  }),

  on(remove, (state, { id }) => {
    return state.filter(todo => {
      if (todo.id !== id) return todo
      return
    })
  }),

  on(clearCompleted, state => {
    return state.filter(todo => {
      if (!todo.isComplete) return todo
      return
    })
  }),

  on(order, (state, { previousIndex, currentIndex }) => {
    const todo = state.find((_, index) => index === previousIndex)!
    const todos = state.filter((_, index) => index !== previousIndex)

    todos.splice(currentIndex, 0, todo)

    return todos
  })
)
