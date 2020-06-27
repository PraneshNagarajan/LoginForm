import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{
  constructor(private router:Router, private afAuth:AngularFireAuth){}
  canActivate() {
    if( localStorage.getItem('GingerUser') || localStorage.getItem('GingerAdmin')) {
       return true;
    } else {
       this.router.navigate(['']);
    }
  }
}
