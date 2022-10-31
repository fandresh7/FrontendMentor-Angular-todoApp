import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppState } from 'src/app/app.reducer'
import { ValidFilters } from '../../filter/filter.actions'
import { Todo } from '../../models/todo.model'

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css']
})
export class TodosPageComponent implements OnInit {
  todos$!: Observable<Todo[]>
  filter$!: Observable<ValidFilters>

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.todos$ = this.store.select('todos')
    this.filter$ = this.store.select('filters')
  }
}
