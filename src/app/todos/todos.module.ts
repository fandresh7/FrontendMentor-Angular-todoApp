import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DragDropModule } from '@angular/cdk/drag-drop'

import { TodoComponent } from './components/todo/todo.component'
import { CreateTodoComponent } from './components/create-todo/create-todo.component'
import { ActionsComponent } from './components/actions/actions.component'
import { TodosPageComponent } from './pages/todos-page/todos-page.component'
import { ReactiveFormsModule } from '@angular/forms'
import { FilterPipe } from './filter.pipe'

@NgModule({
  declarations: [
    TodoComponent,
    CreateTodoComponent,
    ActionsComponent,
    TodosPageComponent,
    FilterPipe
  ],
  imports: [CommonModule, ReactiveFormsModule, DragDropModule],
  exports: [TodosPageComponent]
})
export class TodosModule {}
