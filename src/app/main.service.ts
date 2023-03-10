import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor() {}
  
    getCourses(){
      return ['c', 'c++', 'java']
    }

    setaddress(){
      return{
      "city": "Damn",
      "state": "Damn",
      "country": "India"
      }
    }
}

//ng g s <service name>
