import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { FileTypes } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FileReaderService {
  readFile(blob: Blob, reader: FileReader = new FileReader()): Observable<FileTypes> {
    return new Observable((obs: Subscriber<FileTypes>) => {
      if (!(blob instanceof Blob)) {
        obs.error(new Error('`blob` must be an instance of File or Blob.'));
        return;
      }

      reader.onerror = (err) => obs.error(err);
      reader.onabort = (err) => obs.error(err);
      reader.onload = () => obs.next(reader.result);
      reader.onloadend = () => obs.complete();

      return reader.readAsArrayBuffer(blob);
    });
  }
}
