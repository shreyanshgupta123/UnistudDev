import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrl: './firstpage.component.scss'
})
export class FirstpageComponent {
  show:boolean=true;
  showpage:boolean=false
  constructor(private route:Router) { }

  ngOnInit() {
  }
doc()
{
  this.route.navigate(['/doc']);

}
}
