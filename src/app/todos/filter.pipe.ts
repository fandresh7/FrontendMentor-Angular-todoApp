import { Pipe, PipeTransform } from '@angular/core'
import { ValidFilters } from './filter/filter.actions'
import { Todo } from './models/todo.model'

@Pipe({
  name: 'filterTodos'
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: ValidFilters): Todo[] {
    if (filter === 'ALL') return todos
    if (filter === 'ACTIVE') return todos.filter(todo => !todo.isComplete)
    if (filter === 'COMPLETED') return todos.filter(todo => todo.isComplete)
    return todos
  }
}
