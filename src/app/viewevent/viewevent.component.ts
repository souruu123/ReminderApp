import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-viewevent',
  templateUrl: './viewevent.component.html',
  styleUrls: ['./viewevent.component.css']
})
export class VieweventComponent implements OnInit {

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

}
