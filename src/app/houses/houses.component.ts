import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  public allHouses;
  public houseConst = 1;
  public houseName;
  public pagination = true;

  constructor(public _request:RequestService) { }

  ngOnInit() {
    this.allHouses = this._request.getAllHouses(this.houseConst).subscribe(

      data =>{
        this.allHouses = data;
      },
      error =>{
        console.log(error);
      }
    )
  }
  paginationNext(){
    this.houseConst = this.houseConst + 1;
    this.allHouses = this._request.getAllHouses(this.houseConst).subscribe(

      data =>{
        this.allHouses = data;
      },
      error =>{
        console.log(error);
      }
    )
  }
  paginationPrev(){
    this.houseConst = this.houseConst - 1;
    this.allHouses = this._request.getAllHouses(this.houseConst).subscribe(

      data =>{
        this.allHouses = data;
      },
      error =>{
        console.log(error);
      }
    )
  }
  searchHouse(){
    this.pagination = false;
    this.allHouses = this._request.getParticularHouse(this.houseName).subscribe(

      data =>{
        this.allHouses = data;
      },
      error =>{
        console.log(error);
      }
    )
  }
}
