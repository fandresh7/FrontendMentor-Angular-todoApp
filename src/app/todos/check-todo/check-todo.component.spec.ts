import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTodoComponent } from './check-todo.component';

describe('CheckTodoComponent', () => {
  let component: CheckTodoComponent;
  let fixture: ComponentFixture<CheckTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
