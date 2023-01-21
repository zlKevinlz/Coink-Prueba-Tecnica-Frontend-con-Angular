import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

interface ItemNode {
  name: string;
  children?: ItemNode[];
}

const TREE_DATA: ItemNode[] = [
  {
    name: 'Tarjetas Visa en dispensadores',
    children: [{name: 'Crear dispensador'}, {name: 'Monitorear y editar dispensadores'}, {name: 'Solicitud tarjetas'}],
  }
];

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  isHandset$: Observable<boolean> = this.observer.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay(1)
    );

    private _transformer = (node: ItemNode, level: number) => {
      return {
        expandable: !!node.children && node.children.length > 0,
        name: node.name,
        level: level,
      };
    };

    treeControl = new FlatTreeControl<FlatNode>(
      node => node.level,
      node => node.expandable,
    );
  
    treeFlattener = new MatTreeFlattener(
      this._transformer,
      node => node.level,
      node => node.expandable,
      node => node.children,
    );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  
  constructor(
    private observer: BreakpointObserver
  ) { 
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

  ngOnInit() {
  }

  getNode(node: any){
    console.log(node);
  }

}
