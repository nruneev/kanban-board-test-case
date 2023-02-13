import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StatusTask} from "../../enum/status-task";
import {Icon} from "../../../shared/enum/icon";
import {STATUS_OPTIONS, TIME_OPTIONS} from "../../const/helper";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Task} from "../../interface/task";


@Component({
  selector: 'app-edit-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.sass']
})

export class ViewTaskComponent implements OnInit {
  formGroup: FormGroup;

  icons = Icon;

  timeOptions = TIME_OPTIONS;

  statusOptions = STATUS_OPTIONS

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private _dialog: MatDialogRef<ViewTaskComponent>
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl({value: this.data.title, disabled: true}, [Validators.required, Validators.max(64)]),
      description: new FormControl({value: this.data.description, disabled: true}, [Validators.required, Validators.max(264)]),
      status: new FormControl({value: this.data.status, disabled: true}),
      time: new FormControl({value: this.data.time, disabled: true}, [Validators.required])
    })
  }

  timeLose(event: boolean): void {
    this.data = {
      ...this.data,
      isTimeLose: event
    };
  }
}
