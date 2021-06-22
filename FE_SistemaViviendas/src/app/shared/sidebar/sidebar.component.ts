import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from './menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItem = Array<MenuItemModel>();

  constructor() { }

  ngOnInit() {
    this.addMenuItems();
  }
  
  addMenuItems() {
    this.menuItem = [
      new MenuItemModel('Dashboard', 'speed', './dashboard', []),
      new MenuItemModel('Tipologias', 'home', './tipologias', []),
      new MenuItemModel('Convenios', 'work', './agreement', [])
    ]
  }

}
