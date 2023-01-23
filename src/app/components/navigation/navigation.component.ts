import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  
  panelOpenState = false;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  isHandset$: Observable<boolean> = this.observer.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay(1)
    );
  
  constructor(
    private observer: BreakpointObserver
  ) { }

  ngOnInit() {
  }

}
