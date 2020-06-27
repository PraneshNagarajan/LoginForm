import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AdminRouterGuardService implements CanActivate{
  constructor(private router:Router, private afAuth:AngularFireAuth){}
  canActivate() {
    if( localStorage.getItem('GingerAdmin')) {
       return true;
    } else {
       this.router.navigate(['']);
    }
  }
}
