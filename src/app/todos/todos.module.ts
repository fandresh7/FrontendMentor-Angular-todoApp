import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TodoComponent } from './todo/todo.component'
import { ListComponent } from './list/list.component'
import { CheckTodoComponent } from './check-todo/check-todo.component'
import { CreateTodoComponent } from './create-todo/create-todo.component'
import { ActionsComponent } from './actions/actions.component'

@NgModule({
  declarations: [
    TodoComponent,
    ListComponent,
    CheckTodoComponent,
    CreateTodoComponent,
    ActionsComponent
  ],
  imports: [CommonModule],
  exports: [ListComponent]
})
export class TodosModule {}
