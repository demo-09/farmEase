import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../../app/pages/news/news';

@Injectable({ providedIn: 'root' })
export class NewsService {

  private baseUrl = 'https://newsdata.io/api/1/latest?apikey=pub_590a294a9e544a5984a2ecdc09ba1742&q=indian%20agriculture%20';

  constructor(private http: HttpClient) { }
  getNews(pageToken: string = ''): Observable<News> {
    // If your baseUrl already ends with '&q=...', 
    // ensure you aren't adding a second '?' or missing a '&'
    const url = pageToken
      ? `${this.baseUrl}&page=${pageToken}`
      : this.baseUrl;

    return this.http.get<News>(url);
  }
}
