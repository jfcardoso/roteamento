import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-with-parameter',
  templateUrl: './page-with-parameter.component.html',
  styleUrls: ['./page-with-parameter.component.css']
})
export class PageWithParameterComponent implements OnInit {
  
  id: number | null = null
  name: string | null = ""
  age: number | null = null

  constructor(private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{this.id = Number(params.get("id"))})
    this.route.queryParamMap.subscribe(params =>{
      this.age = Number(params.get("age"))
      this.name = params.get("name")
    })   
  }
}
