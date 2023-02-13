import { TestBed } from '@angular/core/testing';
import {provideMockStore} from "@ngrx/store/testing";
import {DBConfig, NgxIndexedDBModule, NgxIndexedDBService} from "ngx-indexed-db";
import {PLATFORM_ID} from "@angular/core";

import { TaskService } from './task.service';
import {TaskWebWorkerService} from "./task-web-worker.service";


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

describe('ApiService', () => {
  let service: TaskService;
  let indexedDb: NgxIndexedDBService;
  let workerService: TaskWebWorkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({}),
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
      imports: [NgxIndexedDBModule.forRoot(dbConfig)],
    });
    service = TestBed.inject(TaskService);
    indexedDb = TestBed.inject(NgxIndexedDBService);
    workerService = TestBed.inject(TaskWebWorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
