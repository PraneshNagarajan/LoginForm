import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
user;
  constructor(private router:Router) {
    if (localStorage.getItem('GingerUser')) {
      this.user = 'GingerUser';
    }
    else if(localStorage.getItem('GingerAdmin')) {
      this.user = 'GingerAdmin';
    }
  }
  onAuth() {
    if (localStorage.getItem('GingerUser')) {
        this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['']);
    }
  }
}
