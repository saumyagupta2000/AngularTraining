import { Component } from '@angular/core';
import { MainService } from './main.service';

@Component({
    selector: 'courses',
    template: '<h1>Hello</h1>',
})

export class CoursesComponent{
    constructor(_service: MainService){           //Dependency Injection
        console.log(_service.getCourse())
    }
}