import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article1',
  templateUrl: './article1.component.html',
  styleUrls: ['./article1.component.scss']
})
export class Article1Component implements OnInit {
  id :number
  article :Article
  constructor(private service: ArticleService) { }

  ngOnInit(): void {
    this.id=Number(localStorage.getItem("idarticle"))
    this.getarticle(this.id)
  }
  

  getarticle(id){
    this.service.getArticle(id).subscribe(
      (result)=>{ 
        console.log("wooooooooooork2");
                  console.log(result);
                  this.article = result as Article;
               },
      (error)=>{
                 console.log(error);
                 
                 console.log("i dont work");
               }
     ) 
  }

}
