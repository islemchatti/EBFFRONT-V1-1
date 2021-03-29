import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-moteur-article',
  templateUrl: './moteur-article.component.html',
  styleUrls: ['./moteur-article.component.scss']
})
export class MoteurArticleComponent implements OnInit {

  constructor(public articleService:ArticleService, private _router:Router) { }
  Articles;
  ngOnInit(): void {
    this.articleService.getListArticle().subscribe(
      (result)=>{ 
                  console.log(result);
                  this.Articles = result as Article [];
               },
      (error)=>{
                 console.log(error);
                 
                 console.log("i dont work");
               }
     ) 
    
  }
  
  LirePlus(id){
    
    localStorage.setItem("idarticle",id)
    this._router.navigateByUrl('/retraite/article');
    console.log("voiir pluuuuuuuuuuuus");

  }



}
