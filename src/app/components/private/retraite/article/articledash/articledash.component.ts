import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articledash',
  templateUrl: './articledash.component.html',
  styleUrls: ['./articledash.component.scss']
})
export class ArticledashComponent implements OnInit {
  id :number
  article :Article
  constructor(private service: ArticleService) {
   }

  ngOnInit(): void {
    
  }
 

}
