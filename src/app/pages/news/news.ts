import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../Auth/news.service';
import { Card } from '../../Components/card/card';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [Card, CommonModule, RouterLink],
  templateUrl: './news.html',
  styleUrls: ['./news.css']
})
export class News implements OnInit {
  articles: any[] = [];
  nextPageToken: string = '';
  loading: boolean = false;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    // This only runs when the page first loads
    this.fetchNews();
  }

  // This function handles the actual API call
  fetchNews() {
    if (this.loading) return;


    this.newsService.getNews(this.nextPageToken).subscribe({
      next: (data: any) => {
        if (data && data.results) {
          const mapped = data.results.map((item: any) => ({
            title: item.title,
            description: item.description,
            imageUrl: item.image_url,
            label: item.category?.[0] || 'Agriculture',
            link: item.link
          }));

          // Merge new results with old ones
          this.articles = [...this.articles, ...mapped];

          // Store the token for the next page
          this.nextPageToken = data.nextPage;
        }
       
      },
      error: (err) => {
        console.error("Fetch Error:", err);
       
      }
    });
  }

  // This is the function your "Load More" button should click
  loadMore() {
    if (this.nextPageToken ) {
      this.fetchNews();
    }
  }
}
