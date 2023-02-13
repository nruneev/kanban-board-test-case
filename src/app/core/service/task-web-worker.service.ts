import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class TaskWebWorkerService {

  buildWorker(): Worker {
    const workerFunction = () => {

      onmessage = (e) => {
        postMessage.bind(self)(e.data);
      };
    };

    const dataObj = '(' + workerFunction + ')();';

    const blob = new Blob([dataObj]);
    const blobURL = URL.createObjectURL(blob);
    return new Worker(blobURL);
  }
}
