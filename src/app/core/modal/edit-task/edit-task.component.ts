import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StatusTask} from "../../enum/status-task";
import {Icon} from "../../../shared/enum/icon";
import {STATUS_OPTIONS, TIME_OPTIONS} from "../../const/helper";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Task} from "../../interface/task";


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.sass']
})

export class EditTaskComponent implements OnInit {
  formGroup: FormGroup;

  icons = Icon;

  timeOptions = TIME_OPTIONS;

  statusOptions = STATUS_OPTIONS

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private _dialog: MatDialogRef<EditTaskComponent>
  ) {}

  ngOnInit(): void {
    const isNewTask = this.data.status === StatusTask.new;

    this.formGroup = new FormGroup({
      title: new FormControl({value: this.data.title, disabled: !isNewTask}, [Validators.required, Validators.max(64)]),
      description: new FormControl({value: this.data.description, disabled: !isNewTask}, [Validators.required, Validators.max(264)]),
      status: new FormControl(this.data.status),
      time: new FormControl({value: this.data.time, disabled: !isNewTask}, [Validators.required])
    })
  }

  timeLose(event: boolean): void {
    this.data = {
      ...this.data,
      isTimeLose: event
    };
  }

  saveButton(): void {
    if (this.formGroup.valid) {
      const templateTask = {
        ...this.data,
        ...this.formGroup.value,
        id: this.data.id,
        isTimeLose: this.data.isTimeLose,
        dataUpdate: new Date(Date.now())
      }

      this._dialog.close(templateTask);
    } else {
      this.formGroup.markAllAsTouched();
      this.formGroup.markAsDirty();
    }
  }
}
