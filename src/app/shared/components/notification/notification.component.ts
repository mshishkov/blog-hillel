import { Component, OnInit } from '@angular/core';
import { Notify } from '../../models/notify';
import { Observable } from 'rxjs/Observable';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'aaa-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

  public get notifications(): Observable<Notify[]> {
    return this.notificationService.messages;
  }


}
