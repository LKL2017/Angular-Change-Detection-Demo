import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataUpdateService} from '../../data-update.service';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.less']
})
export class ChildAComponent implements OnInit, OnDestroy {

  constructor(private dataUpdateService: DataUpdateService) { }

  ngOnInit(): void {
    this.dataUpdateService.setData(false);
  }

  ngOnDestroy() {
    this.dataUpdateService.setData(false);
  }

}
