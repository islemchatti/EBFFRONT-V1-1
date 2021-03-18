import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor(public articleService:ArticleService, private _router:Router) { }
  Articles;
  titre1;
  titre2;
  titre3;
  titre4;
  Nums = [
    {
      "id": 1,
      
    },
    {
      "id": 2,
     
    },
    {
      "id": 3,
     
    },
    {
      "id": 4,
    
    },
  
  ]
  ;
  

  ngOnInit(): void {
    this.articleService.getArticlesCarousel().subscribe(
      (result)=>{ 
                  console.log(result);
                  this.Articles = result as Article [];
                  this.titre1=this.Articles[0];
                  this.titre2=this.Articles[1];
                  this.titre3=this.Articles[2];
                  this.titre4=this.Articles[3];
               },
      (error)=>{
                 console.log(error);
                 
                 console.log("i dont work");
               }
     ) 
  }

}

