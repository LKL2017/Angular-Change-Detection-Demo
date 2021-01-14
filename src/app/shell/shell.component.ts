import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataUpdateService} from '../data-update.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.less']
})
export class ShellComponent implements OnInit {
  isShow = true;

  constructor(private router: Router, private dataUpdateService: DataUpdateService) { }

  ngOnInit(): void {
    this.dataUpdateService.updateObservable.subscribe(res => {
      this.isShow = res;
    });
  }

  navigateToA() {
    this.router.navigate(['shell/child-a']);
  }

  navigateToB() {
    this.router.navigate(['shell/child-b']);
  }
}
