import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public name:string = 'Alexander J. Woods';
  public links:string[] = new Array<string>(
    'about',
    'experience',
    'education',
    'skills',
    'awards'
  );
  
  public itemNames:string[] = new Array<string>(
    'About',
    'Experience',
    'Education',
    'Skills',
    'Awards'
  )
  constructor() { }

  ngOnInit(): void {
  }

}
