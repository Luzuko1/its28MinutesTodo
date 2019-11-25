import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';
import {error} from 'util';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {
  message = 'Some welcome message';
  welcomeMessageFromService: string;
  name = '';
  // Activated Route
  constructor(private route: ActivatedRoute,
              private service: WelcomeDataService
  ) { }

  ngOnInit() {
    console.log(this.message);
   // console.log(this.route.snapshot.params.name);
    this.name = this.route.snapshot.params.name;
  }

  getWelcomeMessage() {
  // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
   console.log('last line of get message');
  }
  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
   handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
     // console.log(response);
     // console.log(response.message);
   }

  handleErrorResponse(error) {
    console.log(error);
    console.log(error.message);
    console.log(error.eror);
    this.welcomeMessageFromService = error.message;
  }
}
