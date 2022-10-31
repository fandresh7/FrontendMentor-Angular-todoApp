import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppState } from 'src/app/app.reducer'
import { Todo } from '../../models/todo.model'
import * as todoActions from '../../todo.actions'
import * as filterActions from '../../filter/filter.actions'

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  todos$!: Observable<Todo[]>
  filter$!: Observable<filterActions.ValidFilters>

  filters: filterActions.ValidFilters[] = ['ALL', 'ACTIVE', 'COMPLETED']
  itemsLeft: number = 0

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.todos$ = this.store.select('todos')

    this.store.subscribe(state => {
      const incompleteTotos = state.todos.filter(todo => !todo.isComplete)
      this.itemsLeft = incompleteTotos.length
    })

    this.filter$ = this.store.select('filters')
  }

  clearComplete() {
    this.store.dispatch(todoActions.clearCompleted())
  }

  changeFilter(filter: filterActions.ValidFilters) {
    this.store.dispatch(filterActions.setFilter({ filter }))
  }
}
