import {ComponentFixture, TestBed, tick} from '@angular/core/testing';

import {TaskComponent} from './task.component';
import {MatCardModule} from "@angular/material/card";

import {StatusTask} from "../../enum/status-task";
import {ButtonsModule} from "../../../shared/components/buttons/buttons.module";
import {TaskService} from "../../service/task.service";
import {provideMockStore} from "@ngrx/store/testing";
import {PLATFORM_ID} from "@angular/core";
import {DBConfig, NgxIndexedDBModule} from "ngx-indexed-db";
import {MatDialogModule} from "@angular/material/dialog";

const dbConfig: DBConfig  = {
  name: 'KanbanBoardTestCase',
  version: 1,
  objectStoresMeta: [{
    store: 'task',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'title', keypath: 'title', options: { unique: false } },
      { name: 'description', keypath: 'description', options: { unique: false } },
      { name: 'time', keypath: 'time', options: { unique: false } },
      { name: 'status', keypath: 'status', options: { unique: false } },
      { name: 'dataUpdate', keypath: 'dataUpdate', options: { unique: false } },
    ]
  }]
};


describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskComponent ],
      imports: [MatCardModule, ButtonsModule, NgxIndexedDBModule.forRoot(dbConfig), MatDialogModule],
      providers: [
        provideMockStore({}),
        { provide: PLATFORM_ID, useValue: 'browser' },
      ]
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
      isTimeLose: false,
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
