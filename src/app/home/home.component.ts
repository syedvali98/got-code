import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  allBooks;
  allHouses;
  allCharacters;
  
  constructor(public _request:RequestService) { }

  ngOnInit() {
    this.allBooks = this._request.getAllBooks(1).subscribe(

      data =>{
        this.allBooks = data;
      },
      error =>{
        console.log(error);
      }
    )
    
    this.allHouses = this._request.getAllHouses(1).subscribe(

      data =>{
        this.allHouses = data;
      },
      error =>{
        console.log(error);
      }
    )
    
    this.allCharacters = this._request.getAllCharacters(3).subscribe(

      data =>{
        this.allCharacters = data;
      },
      error =>{
        console.log(error);
      }
    )
    }
}

