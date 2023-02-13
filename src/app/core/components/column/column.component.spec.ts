import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ColumnComponent} from './column.component';
import {StatusTask} from "../../enum/status-task";
import {of} from "rxjs";

describe('ColumnComponent', () => {
  let component: ColumnComponent;
  let fixture: ComponentFixture<ColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnComponent);
    component = fixture.componentInstance;
    component.column = {
      title: '',
      value: StatusTask.new,
      tasks: of([])
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change value', () => {
    component.column = {
      title: 'New',
      tasks: of([]),
      value: StatusTask.new
    }
    fixture.detectChanges();

    expect(component.column.title).toEqual('New');
    expect(component.column.value).toEqual(StatusTask.new);

    component.column = {
      title: 'Edit',
      value: StatusTask.process,
      tasks: of([])
    }
    fixture.detectChanges();

    expect(component.column.title).toEqual('Edit');
    expect(component.column.value).toEqual(StatusTask.process);
  });

});
