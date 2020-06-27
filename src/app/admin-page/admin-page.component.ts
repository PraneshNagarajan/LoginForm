import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnDestroy {
  Urole;
  Arole;
  datas = [];
  subscription: Subscription;
  roles = [
    { name: 'admin' },
    { name: 'user' }
  ];

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router, private service: MainService) {
  this.subscription = service.getData();
  this.datas = service.getData();
  if(localStorage.getItem('GingerUser')) {
    this.Urole = 'GingerUser';
  } else {
    this.Arole = 'GingerAdmin';
  }
  }

  signOut() {
    this.afAuth.auth.signOut();
    if(localStorage.getItem('GingerUser')) {
      localStorage.removeItem('GingerUser');
    } else {
      localStorage.removeItem('GingerAdmin');
    }
        this.router.navigate(['']);
  }

  onUpdate(id, Urole) {
    this.db.object('/RegisterTable/' + id).update({ role: Urole }).then(() => {
      let index = this.datas.findIndex(user => user['id'] === id);
      console.log(this.datas[index]);
      this.datas[index]['value']['role'] = Urole;
      alert("Updated Sucessfully");
    }, error => {
      alert(error);
    });
  }

  onDelete(id) {
    console.log(id);
    this.db.object('/RegisterTable/' + id).remove().then(() => {
      let index = this.datas.findIndex(user => user['id'] === id);
      console.log(index);
      this.datas.splice(index, 1);
      alert('Successfully deleted')
    }, error => {
      alert(error);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
