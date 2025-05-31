import { Component, signal } from '@angular/core';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MenuComponent } from '../menu/menu.component';
import { MenuList } from '../../models/menuList';

@Component({
  selector: 'app-home',
  imports: [MainHeaderComponent, SidenavComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  menuList = signal<MenuList>();
}
