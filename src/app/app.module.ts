import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DBConfig, NgxIndexedDBModule} from "ngx-indexed-db";

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {reducers, taskReducer} from "./store/reducers/task.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {AppRoutingModule} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {ColumnModule} from "./core/components/column/column.module";
import {ButtonsModule} from "./shared/components/buttons/buttons.module";
import {CreateTaskComponent} from "./core/modal/create-task/create-task.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";


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
      { name: 'isTimeLose', keypath: 'isTimeLose', options: { unique: false } },
      { name: 'dataUpdate', keypath: 'dataUpdate', options: { unique: false } },
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    MatCardModule,
    ColumnModule,
    ButtonsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
