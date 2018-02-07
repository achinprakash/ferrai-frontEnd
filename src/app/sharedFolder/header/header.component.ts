import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
sessionmanagement=localStorage.getItem("email");
userName = localStorage.getItem("userName");

  constructor(private router: Router) { }

  public logOut() {
    localStorage.clear();
    console.log(localStorage.getItem("email"));
    window.location.reload();
    this.router.navigate(['/']);
    console.log(localStorage.getItem("email"));
  }

  ngOnInit() {
  }

}
