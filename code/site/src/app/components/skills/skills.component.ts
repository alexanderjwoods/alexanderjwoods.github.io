import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  public title:string = "Skills";
  public languagesHeader: string = "Programming Languages & Tools";
  public listLanguages: string[] = new Array<string>(
    '<img src="..\\..\\assets\\images\\csharp_icon.png" />',
    '<i class="fab fa-angular"></i>',
    '<i class="fab fa-js-square"></i>',
    '<i class="fab fa-css3-alt"></i>',
    '<i class="fab fa-sass"></i>',
    '<img src="..\\..\\assets\\images\\sql_icon.png" />',
    '<img src="..\\..\\assets\\images\\mysql_icon.png" />',
    '<img src="..\\..\\assets\\images\\mongo_icon.png" />',
    '<img src="..\\..\\assets\\images\\netcore_icon.png" />',
    '<img src="..\\..\\assets\\images\\blazor_icon.png" />',
    '<img src="..\\..\\assets\\images\\api_icon.png" />',
    '<img src="..\\..\\assets\\images\\tfs_icon.png" />',
    '<i class="fab fa-github-square"></i>',
    '<i class="fab fa-jira"></i>',
    '<i class="fab fa-github"></i>',
    '<i class="fab fa-npm"></i>'
  );
  public workflowHeader: string = 'Workflow';
  public workflowList:string[] = new Array<string>(
    'Team Leadership And Mentoring',
    'Test Driven Development',
    'Mobile-First, Responsive Design',
    'Cross Browser Testing & Debugging',
    'Cross Functional Teams',
    'Agile Development & Scrum'
  );
}
