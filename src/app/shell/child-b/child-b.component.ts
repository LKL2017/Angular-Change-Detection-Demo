import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataUpdateService} from '../../data-update.service';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.less']
})
export class ChildBComponent implements OnInit, OnDestroy {

  constructor(private dataUpdateService: DataUpdateService) { }

  ngOnInit(): void {
    this.dataUpdateService.setData(true);
  }

  ngOnDestroy() {
    this.dataUpdateService.setData(true);
  }

}
