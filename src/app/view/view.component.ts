import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { RequestService } from '../request.service';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public currentView;
  public viewUrl;

  constructor(public request:RequestService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.viewUrl = this.activatedRoute.snapshot.paramMap.get('url');
    console.log(this.viewUrl);

    this.request.singleInfo(this.viewUrl).subscribe(
      data =>{
        this.currentView = data;
      },
      error =>{
        console.log(error);
      }
      
    )

  }

}
