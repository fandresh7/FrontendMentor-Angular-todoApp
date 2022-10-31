import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { AppState } from '../../../app.reducer'
import * as actions from '../../todo.actions'

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  textInput: FormControl
  checkInput: FormControl

  constructor(private store: Store<AppState>) {
    this.textInput = new FormControl('', Validators.required)
    this.checkInput = new FormControl(false)
  }

  add() {
    if (this.textInput.invalid) return
    this.store.dispatch(
      actions.create({
        text: this.textInput.value,
        isComplete: this.checkInput.value
      })
    )
    this.textInput.reset()
    this.checkInput.reset()
  }
}
