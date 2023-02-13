import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskWebWorkerService} from "../../../core/service/task-web-worker.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-time-bar',
  templateUrl: './time-bar.component.html',
  styleUrls: ['./time-bar.component.sass']
})
export class TimeBarComponent implements OnInit {
  @Input() time: number;
  @Input() dateUpdate: Date;

  @Output() timeLose: EventEmitter<boolean> = new EventEmitter<boolean>();

  percent: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private _worker: Worker;

  constructor(private _workerService: TaskWebWorkerService) {
    this._worker = _workerService.buildWorker();

    this._worker.addEventListener('message', () => {
      let timerStart = true;

      const myTimer = () => {
        const date = (new Date()).valueOf();
        const diff = date - this.dateUpdate.valueOf();
        const minutes = Math.floor(diff/1000/60);
        const seconds = Math.floor(diff/1000)-minutes*60;
        if(diff <= this.time * 1000) {
          this.calculatePercent(seconds);
        } else {
          this.terminateWorker();
        }
      }

      const myVar = setInterval(() => {
        myTimer()
      },50);
    })
  }

  ngOnInit(): void {
    this._worker.postMessage('');
  }

  calculatePercent(seconds: number): void {
    this.percent.next(Math.round(((seconds / this.time) * 100)));
  }

  terminateWorker(): void {
    this.percent.next(100);
    this._worker.removeEventListener('message', () => {});

    this.timeLose.emit(true);
  }
}
