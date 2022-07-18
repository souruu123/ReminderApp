import { Component, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user:any
  constructor(private router:Router ,private ds:DataService) {

    this.user=this.ds.currentUser

   }

  ngOnInit(): void {
  }
logout(){
  localStorage.removeItem("currentUser")
  localStorage.removeItem("currentAcno")
  localStorage.removeItem("currentPswd")

  this.router.navigateByUrl('')
}

viewevent(){
  this.router.navigateByUrl('viewevent')
}

}
