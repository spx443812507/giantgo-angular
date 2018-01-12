import { Component, OnInit } from '@angular/core';

import { Webinar } from '../../models/webinar';
import { WebinarService } from '../../services/webinar.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  webinars: Webinar[];

  constructor(private webinarService: WebinarService) { }

  ngOnInit() {
    this.getWebinars();
  }

  getWebinars(): void {
    this.webinarService.getWebinars()
      .subscribe(pager => this.webinars = pager.data);
  }
}
