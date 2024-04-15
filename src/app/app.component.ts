import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Unistud';
  isDark!: boolean;
  isSideMenuOpen: boolean = false;

  toggleSideMenu(event: Event) {
    if (event.target instanceof HTMLInputElement) {
      this.isSideMenuOpen = event.target.checked;
    }
  }
  closeSideMenu(event: MouseEvent) {
    if (event.target && !(event.target as HTMLElement).closest('.navbar-end')) {
      this.isSideMenuOpen = false;
      const toggle = document.querySelector('.toggle') as HTMLInputElement;
      if (toggle) {
        toggle.checked = false;
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    this.closeSideMenu(event);
  }
  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  constructor(private route:Router)
  {

  }
  ngOnInit() {
    const storedValue = localStorage.getItem('isDark');
    if (storedValue !== null) {
      // Parse the stored value if it's not null
      this.isDark = JSON.parse(storedValue);
    } else {
      // Default to light mode if no value is found in localStorage
      this.isDark = false;
    }
    this.applyTheme(); // Apply theme on initialization
  }

  toggleDarkMode() {
    this.isDark = !this.isDark;
    localStorage.setItem('isDark', JSON.stringify(this.isDark));
    this.applyTheme(); // Apply theme when dark mode is toggled
  }

  applyTheme() {
    const theme = this.isDark ? 'synthwave' : ''; // Add or remove the theme class
    document.body.className = theme; // Apply the theme class to the body
  }
  Navigation(components:string)
  {
switch(components)
{
case'AIbot':
this.route.navigate(['/chatbot']);
break;
}
  }
}
