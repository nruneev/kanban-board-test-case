import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Icon } from 'src/app/shared/enum/icon';

import {STATUS_OPTIONS, TIME_OPTIONS} from "../../const/helper";
import { StatusTask } from '../../enum/status-task';
import {MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.sass']
})

export class CreateTaskComponent {
  formGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.max(64)]),
    description: new FormControl('', [Validators.required, Validators.max(264)]),
    status: new FormControl({value: StatusTask.new, disabled: true}),
    time: new FormControl(0, [Validators.required])
  })

  icons = Icon;

  timeOptions = TIME_OPTIONS;

  statusOptions = STATUS_OPTIONS

  constructor(private _dialog: MatDialogRef<CreateTaskComponent>) {
  }

  saveButton(): void {

    if (this.formGroup.valid) {
      console.log('ok')
      const templateTask = {
        ...this.formGroup.value,
        status: StatusTask.new,
        isTimeLose: false,
        dataUpdate: new Date(Date.now())
      }

      this._dialog.close(templateTask);
    } else {
      this.formGroup.markAllAsTouched();
      this.formGroup.markAsDirty();
    }
  }
}
