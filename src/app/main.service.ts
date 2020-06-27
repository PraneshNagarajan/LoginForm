import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  datas: any = [];
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) { 
    this.db.list('/RegisterTable').snapshotChanges()
    .subscribe(user => {
      user.map(data => {
        this.datas.push({ id: data.key, value: data.payload.val() });
      });
    });
   }
   
  getData(id?) {
    return this.datas;
  }

  loginAuth(id) {
    this.datas.find( user => { 
      console.log( user['id'] )
      if(user.value['id'] === id) {
        if(user.value['role'] === "user" || !user.value['role']){
          localStorage.setItem('GingerUser', id);
        } 
        else if(user.value['role'] === "admin") {
          localStorage.setItem('GingerAdmin', id);
        }
        this.router.navigate(['\home']);
      }
    });
  }
}
