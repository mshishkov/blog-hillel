import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Notify } from '../shared/models/notify';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class NotificationService {
  private messagesArray: Notify[] = [];
  private messages$: BehaviorSubject<Notify[]> = new BehaviorSubject(this.messagesArray);

  constructor() { }

  pushMessage(message: Notify) {
    this.messagesArray.push(message);
    this.messages$.next([...this.messagesArray]);
  }

  public get messages(): Observable<Notify[]> {
    return this.messages$.asObservable();
  }

}
