import { Component } from '@angular/core';
import {Column} from "./core/interface/column";
import {StatusTask} from "./core/enum/status-task";
import {Icon} from "./shared/enum/icon";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  icons = Icon;
  columns: Column[] = [{
    title: 'Новые',
    value: StatusTask.new
  }, {
    title: 'Выполняются',
    value: StatusTask.process
  }, {
    title: 'Готовы',
    value: StatusTask.done
  }];
}
