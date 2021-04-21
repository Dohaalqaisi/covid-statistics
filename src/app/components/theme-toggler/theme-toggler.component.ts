import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss']
})
export class ThemeTogglerComponent implements OnInit {

  isDarkTheme;

  constructor(@Inject (DOCUMENT) private doc: Document) {}

  ngOnInit(): void {
    let dataTheme = this.doc.documentElement.dataset.theme;
    dataTheme === 'dark' ? this.isDarkTheme = true : this.isDarkTheme = false;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    let theme = this.isDarkTheme ? 'dark' : 'light';
    this.doc.documentElement.setAttribute('data-theme', theme);
  }
}
