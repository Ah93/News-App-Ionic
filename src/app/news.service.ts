import { Injectable } from '@angular/core';
//import { environment } from 'src/environments/environment';
import {HttpClientModule, HttpClient} from '@angular/common/http';
//const API_URL = environment.apiUrl;
//const API_KEY = 'c6158053b2fb4b128851ccf70133137b';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
 currentArticle: any;
  constructor(private http: HttpClient) {

  }

  getData() {
        //return this.http.get('${API_URL}/${url}&apikey=${API_KEY}' );
        return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-28&sortBy=publishedAt&apiKey=c6158053b2fb4b128851ccf70133137b');
  }
}
