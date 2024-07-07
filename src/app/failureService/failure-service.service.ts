import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FailureData } from '../failureData/failure-data';

@Injectable({
  providedIn: 'root'
})
export class FailureServiceService {

  constructor(private http:HttpClient) { }

  fetchData(timeRange:string):Observable<FailureData>{
    let endpoint='';
    switch(timeRange){
      case '1':
        endpoint='http://localhost:3002/data';
        break;

        case '24':
          endpoint='http://localhost:3003/data';
          break;

          case '48':
            endpoint='http://localhost:3004/data';
            break;
    }

    return this.http.get<FailureData>(endpoint);
  }
}
