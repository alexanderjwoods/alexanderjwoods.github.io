import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public title:string = "Experience";
  public elements:Experience[] = new Array<Experience>(
    new Experience("Senior Software Engineer", "Xperience", "Worked leading a small team of developers to design, implement, and maintain websites for external clients.  Implemented Agile principals and Test Driven Development to improve the development lifecycle, cutting development time.  Led architecture for a redesign for a client sweepstakes website as part of delivering sweeping changes.  Implemented authentication and authorization mechanisms, as well as data security practices for our client management system.  Developed an external API to centralize data access behind auth gates.", "July 2020", "Present"),
    new Experience("Senior Software Engineer", "Dominos Pizza", "Worked within an Agile environment to complete upgrades to legacy applications using c# and VB6.  Improved internal deployment application by rewriting legacy code in more maintainable Python modules.  Designed and implemented Contactless Delivery during beginning of COVID outbreak.  Rewrote legacy credit card payments APIs to conform to current security standards.  Provide leadership and best practice knowledge to junior developers.", "March 2020", "July 2020"),
    new Experience("Full Stack Developer", "JATO Dynamics", "Worked creating the WLTP API sets using c#, .NET Core 3, Core Entity Framework, Azure Functions, and Azure DevOps.  Worked to create the Horizon Platform using c#, .NET Core 3, MongoDB, Azure Queues, and Angular2.  Provided leadership as a subject matter expert on Agile, Test Driven Development, and Blazor.  Implemented reporting dashboards using Blazor for WLTP APIs.  Created a URL shortening application using Blazor and Core Entity Framework.  Hosted two talks at internal developer conference on TDD and Blazor.", "February 2018", "November 2019"),
    new Experience("Software Developer", "Title Source (AmRock)", "Lead developer on an OCR/ICR team using c# to pull information from scanned documents.  Built and implemented company wide framework for unit testing using NUnit and Moq.  Led team in eXtreme Programming style of Agile.  Created and led the Experience IT Detroit project.  Worked as part of a team to containerize legacy applications with Docker.", "September 2016", "February 2018"),
    new Experience("Owner", "Woods Technological Solutions", "Develop programmatic solutions to fit a client needs using the appropriate tools for the job, including C++, c#, Python, and PHP.  Created and launched the Hainbuch Quote Configurator tool using SQL database, c# backend, and MVC as the framework.  This tool is still being used by Hainbuch to allow clients to get a quick quote on machine tool parts and orders.  Developed an IMS using c# and MySQL to generate individual QR code tags which are scanned at different locations to keep track of inventory.  Also created a dashboard using MVC c# to provide overview of relevant data.  Worked as part of a larger team of contractors to implement networking and multiplayer capabilities in the War To The Core mobile game.  Used c# and Unity3D’s UNet framework to allow login and data transfer.  Implemented online ordering for Ben and Jerry’s Ice Cream Shop using MVC and c# with SQL database, which was used until the shop changed owners in 2018.  Created a self-contained workstation for a gutter repair company utilizing Windows Surface tablets and c#.  Sketches and purchase quotes were done on side and uploaded via RESTful API to the office for processing into the system, replacing paper and pencil.", "July 2013", "March 2018"),
    new Experience("Software Developer", "Cimulus Software", "Contracted to migrate the DART platform from Classic ASP and Visual Basic to modern .NET 3.5, c#, MVC website.  Re-Contracted to work on the Roll Call application using Objective C and iOS dev tools.", "July 2012", "November 2013")
  );
  constructor() { }

  ngOnInit(): void {
  }

}
