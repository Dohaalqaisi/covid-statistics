import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss']
})
export class ThemeTogglerComponent implements OnInit {

  isDarkTheme;

  constructor() { }

  ngOnInit(): void {
    let theme = document.documentElement.getAttribute("data-theme");
    console.log(document.documentElement);
    
  }

}
