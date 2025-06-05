import { Component, input } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-menu-item',
  imports: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {

  menuItem = input<MenuItem>();

   

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
