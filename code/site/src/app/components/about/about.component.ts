import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public firstAndMiddleInitial:string = "Alexander J.";
  public lastName:string = "Woods";
  public email:string = "alexanderjwoods06@outlook.com";
  public about:string = "10 years experience working in software development, with a concentration in c# and Azure development.  Proven ability to build scalable full stack applications using a variety of frameworks including Blazor, MVC, and Angular, built utilizing Cloud Architectures.";

  constructor() { }

  ngOnInit(): void {
  }

}
