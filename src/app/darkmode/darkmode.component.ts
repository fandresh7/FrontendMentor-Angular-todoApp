import { Component } from '@angular/core'

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.css']
})
export class DarkmodeComponent {
  darkMode: boolean = false

  constructor() {
    this.initDarkMode()
  }

  initDarkMode() {
    if (
      localStorage['theme'] === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      this.darkMode = true
    } else {
      document.documentElement.classList.remove('dark')
      this.darkMode = false
    }
  }

  toggleDarkMode() {
    document.documentElement.classList.toggle('dark')
    if (document.documentElement.classList.contains('dark')) {
      localStorage['theme'] = 'dark'
      this.darkMode = true
    } else {
      localStorage['theme'] = 'light'
      this.darkMode = false
    }
  }
}
