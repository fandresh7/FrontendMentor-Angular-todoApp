import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TodoComponent } from './components/todo/todo.component'
import { CheckTodoComponent } from './components/check-todo/check-todo.component'
import { CreateTodoComponent } from './components/create-todo/create-todo.component'
import { ActionsComponent } from './components/actions/actions.component'
import { TodosPageComponent } from './pages/todos-page/todos-page.component'

@NgModule({
  declarations: [
    TodoComponent,
    CheckTodoComponent,
    CreateTodoComponent,
    ActionsComponent,
    TodosPageComponent
  ],
  imports: [CommonModule],
  exports: [TodosPageComponent]
})
export class TodosModule {}
