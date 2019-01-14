import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  
  public allCharacters;
  public charConst = 1;
  public characterName;
  public pagination = true;

  constructor(public _request:RequestService) { }

  ngOnInit() {
    this.allCharacters = this._request.getAllCharacters(this.charConst).subscribe(

      data =>{
        this.allCharacters = data;
      },
      error =>{
        console.log(error);
      }
    )
  }
  paginationNext(){
    this.charConst = this.charConst + 1;
    this.allCharacters = this._request.getAllCharacters(this.charConst).subscribe(

      data =>{
        this.allCharacters = data;
      },
      error =>{
        console.log(error);
      }
    )

  }
  paginationPrev(){
    this.charConst = this.charConst - 1;
    this.allCharacters = this._request.getAllCharacters(this.charConst).subscribe(

      data =>{
        this.allCharacters = data;
      },
      error =>{
        console.log(error);
      }
    )
  }
  searchCharacter(){
    this.pagination = false;
    this.allCharacters = this._request.getParticularCharacter(this.characterName).subscribe(

      data =>{
        this.allCharacters = data;
      },
      error =>{
        console.log(error);
      }
    )
  }
}
