import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Notify } from '../shared/models/notify';

@Injectable()
export class NotificationService {
  private messages: Notify[] = [];
  private messages$: BehaviorSubject<any> = new BehaviorSubject(this.messages);

  constructor() { }

  getMessages(): Observable<any[]> {
    return this
      .messages$
      .asObservable();
  }

  pushMessage(message: Notify): void {
    this.messages.push(message);
    this.messages$.next([...this.messages]);
  }

}
