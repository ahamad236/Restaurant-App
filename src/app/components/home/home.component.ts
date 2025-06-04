import { Component, signal } from '@angular/core';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MenuComponent } from '../menu/menu.component';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-home',
  imports: [MainHeaderComponent, SidenavComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  menuList = signal<MenuItem[]>([{
    MenuItemIcon: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    MenuItemDescription: "Pizza",
    MenuItemPrice: 10,
    MenuItemDeliveryTime: 20
  }]);

  
  //Example Menu Item Images (Free Stock URLs):
//Pizza

//URL: https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80

//Burger

//URL: https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80

//Pasta

//URL: https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80

//Salad

//URL: https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80

//Sushi

//URL: https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?auto=format&fit=crop&w=800&q=80
  
}
