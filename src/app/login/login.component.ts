import { Component, OnInit, OnDestroy } from '@angular/core';
import {  AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MainService } from '../main.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isSuccess: boolean;
  isSuccess1: boolean;
  isFailed: any;
  user: any;
  datas = [];

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router, private service: MainService) { 
  }

  ngOnInit(): void {
  }
  Authenticate(cred) {
    let Uid = cred.value.id+'@ginger.com';
      this.afAuth.auth.signInWithEmailAndPassword(Uid, cred.value.password)
      .then( () => {
        this.service.loginAuth(Uid);

      }, error => {
         alert(error);
      });
}

  save(data) {
    let Uid = data.value.id+'@ginger.com';
    let Dob = moment(data.value.dob).format("DD/MM/YYYY");
    this.afAuth.auth.createUserWithEmailAndPassword(Uid, data.value.password).then( () => {
      this.db.list('/RegisterTable').push({
        name: data.value.Name,
        fname: data.value.FName,
        dob: Dob,
        gender: data.value.gender,
        id: Uid,
        password: data.value.password
      });
    }).catch( error => {
      alert(error);
    })
  }
}
