import {ComponentFixture, TestBed, tick} from '@angular/core/testing';

import {TaskComponent} from './task.component';
import {MatCardModule} from "@angular/material/card";

import {StatusTask} from "../../enum/status-task";
import {ButtonsModule} from "../../../shared/components/buttons/buttons.module";


describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskComponent ],
      imports: [MatCardModule, ButtonsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    component.task = {
      title: 'Example',
      description: "Example description",
      time: 30,
      status: StatusTask.new,
      dataUpdate: new Date(),
      id: 1
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correct update status', () => {
    expect(component.task.status).toEqual(StatusTask.new);

    component.task.status = StatusTask.process;
    fixture.detectChanges();

    expect(component.task.status).toEqual(StatusTask.process);

    component.task.status = StatusTask.done;
    fixture.detectChanges();

    expect(component.task.status).toEqual(StatusTask.done);
  })
});
