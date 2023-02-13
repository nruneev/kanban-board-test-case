import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';

import {Task} from "../../interface/task";
import {Icon} from "../../../shared/enum/icon";
import {StatusTask} from "../../enum/status-task";
import {BehaviorSubject} from "rxjs";


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TaskComponent {
  @Input() task: Task;

  @HostBinding('class.timeLose') get isTime() {
    return this.isTimeLose.getValue();
  }

  icons = Icon;
  isTimeLose: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  changeTimeLose(event: boolean): void {
    console.log(event);
    this.isTimeLose.next(event)
  }
}
