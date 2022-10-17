import { Component, Input } from '@angular/core'

interface Todo {
  id: number
  name: string
  created_at: Date
  updated_at: Date
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo?: Todo

  constructor() {}
}
