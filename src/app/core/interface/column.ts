import {StatusTask} from "../enum/status-task";
import {Observable} from "rxjs";
import {Task} from "./task";

export interface Column {
  title: string,
  value: StatusTask,
  tasks: Observable<Task[]>
}
