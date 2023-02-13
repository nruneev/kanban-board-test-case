import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {MatCardModule} from "@angular/material/card";

import { AppComponent } from './app.component';
import {ButtonsModule} from "./shared/components/buttons/buttons.module";
import {ColumnModule} from "./core/components/column/column.module";
import {provideMockStore} from "@ngrx/store/testing";
import {PLATFORM_ID} from "@angular/core";
import {DBConfig, NgxIndexedDBModule} from "ngx-indexed-db";
import {TaskService} from "./core/service/task.service";

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

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule,
        ButtonsModule,
        ColumnModule,
        NgxIndexedDBModule.forRoot(dbConfig)
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore({}),
        { provide: PLATFORM_ID, useValue: 'browser' },
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
