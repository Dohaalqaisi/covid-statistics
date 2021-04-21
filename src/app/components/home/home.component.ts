import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", function(event) {
      document.documentElement.setAttribute("data-theme", "dark");
    });
  }

}
