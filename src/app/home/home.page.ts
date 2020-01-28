import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  articles;
  constructor(private newsService: NewsService, private router: Router) {}

  ionViewDidEnter(){

    this.newsService.getData().subscribe((data) => {
      console.log(data);
      this.articles = data['articles'];
    });
  }

  onGoToNewsDetails(article){
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-details']);
  }

}
