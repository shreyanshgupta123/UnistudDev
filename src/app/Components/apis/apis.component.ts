import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrl: './apis.component.scss'
})
export class ApisComponent {
constructor(private route:Router)
{

}
Navigate(component: string) {
  switch (component) {
      case 'Ecommerce':
          this.route.navigateByUrl('doc/Ecommerce');
          break;
      case 'University':
          this.route.navigateByUrl('doc/University');
          break;
      case 'Food':
          this.route.navigateByUrl('doc/Food');
          break;
      // Add more cases as needed
      default:
          break;
  }
}

}
