import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }
  getCourse = () => {
    return['course'];
  }
}

//ng g s <service name>
