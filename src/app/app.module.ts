import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'

import { appReducers } from './app.reducer'

import { DarkmodeModule } from './darkmode/darkmode.module'
import { TodosModule } from './todos/todos.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodosModule,
    DarkmodeModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
