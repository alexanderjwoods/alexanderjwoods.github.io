import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {
  public title:string = "Awards & Certifications";
  public awards:string[] = new Array<string>(
    "Certified Scrum Master - 2017 through Current",
    "Certified SAFe 4 Practitioner 2019 through Current",
    "OWASP Certified - 2018, 2019, 2020",
    "1<sup>st</sup>Place - NASTAR Nation Snowboard Championships - 2008, 2009, 2010",
    "3<sup>rd</sup>Place - NASTAR Nation Snowboard Championships - 2007"
  );
  constructor() { }

  ngOnInit(): void {
  }

}
