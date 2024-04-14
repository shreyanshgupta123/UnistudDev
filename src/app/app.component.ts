import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Unistud';
  isDark!: boolean;

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
  
}
