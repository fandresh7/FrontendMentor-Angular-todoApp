import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/app.reducer'
import { Todo } from '../../models/todo.model'
import * as actions from '../../todo.actions'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo
  @ViewChild('todoText') todoTextInput!: ElementRef

  checkInput: FormControl = new FormControl(false)
  textInput: FormControl = new FormControl('')

  isEditing: boolean = false

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.checkInput = new FormControl(this.todo.isComplete)
    this.textInput = new FormControl(this.todo.text, Validators.required)

    this.checkInput.valueChanges.subscribe(_ => {
      this.store.dispatch(actions.changeStatus({ id: this.todo.id }))
    })
  }

  setIsEditing() {
    this.isEditing = true
    setTimeout(() => {
      this.todoTextInput.nativeElement.select()
    }, 1)
  }

  textClasses() {
    return {
      'line-through': this.todo.isComplete,
      'text-theme-light-light-grayish-blue': this.todo.isComplete,
      'text-theme-dark-very-dark-grayish-blue': !this.todo.isComplete
    }
  }

  edit() {
    this.isEditing = false

    const text = this.textInput.value.trim()
    if (this.textInput.invalid || text === this.todo.text) return

    this.store.dispatch(actions.update({ id: this.todo.id, text }))
  }

  remove() {
    this.store.dispatch(actions.remove({ id: this.todo.id }))
  }
}
