import { Component, OnInit } from '@angular/core';
import { Notify } from '../../models/notify';
import { Observable } from 'rxjs/Observable';
import { NotificationService } from '../../../core/notification.service';

@Component({
  selector: 'aaa-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

  get notifications(): Observable<Notify[]> {
    return this.notificationService
      .getMessages();
  }


}
