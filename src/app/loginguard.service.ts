import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router/router";
import { Router } from '@angular/router';

@Injectable()
export class LoginguardService implements CanActivate {
    canActivate() {
      if(localStorage.getItem("email")!=null) {
        return true;
      }
      else {
        this.router.navigate(['login']);
        return false;
      }
    }


  constructor(private router: Router) { }

}
