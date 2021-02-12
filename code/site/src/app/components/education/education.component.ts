import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  public title:string = "Education";
  public elements:Education[] = new Array<Education>(
    new Education("Washtenaw Community College", "Associate of Science", "Computer Science - C++ Programming", "2018"),
    new Education("Washtenaw Community College", "Certification of Science", "Foundations of Information Systems", "2017"),
    new Education("Dexter High School", "Diploma", "", "2010")
  );
  constructor() { }

  ngOnInit(): void {
  }

}
