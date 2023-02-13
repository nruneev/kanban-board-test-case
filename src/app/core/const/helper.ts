import {StatusTask} from "../enum/status-task";

export const TIME_OPTIONS = [30, 60, 120, 240, 360, 480];

export const STATUS_OPTIONS = [{
  value: StatusTask.new,
  title: 'Новая'
},{
  value: StatusTask.process,
  title: 'Выполняется'
},{
  value: StatusTask.done,
  title: 'Готова'
}]
