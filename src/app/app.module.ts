import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { DarkmodeModule } from './darkmode/darkmode.module'
import { TodosModule } from './todos/todos.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodosModule, DarkmodeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
