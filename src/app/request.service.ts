import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl = "https://anapioficeandfire.com/api";
  housesconst;
  charactersconst;

  constructor(public http: HttpClient) { }

  public getAllBooks(bookconst){
    let bookResponse = this.http.get(this.baseurl+"/books?page="+bookconst+"&pageSize=8");
    console.log(this.baseurl+"/books?page="+bookconst+"&pageSize=10");
    return bookResponse;
  }

  public getAllHouses(houseConst){
    let houseResponse = this.http.get(this.baseurl+"/houses?page="+houseConst+"&pageSize=8");
    return houseResponse;
  }
  public getAllCharacters(charConst){
    let characterResponse = this.http.get(this.baseurl+"/characters?page="+charConst+"&pageSize=8");
    return characterResponse;
  }
  public getParticularBook(bookName){
    let response = this.http.get(this.baseurl+'/books?name='+bookName);
    console.log(this.baseurl+'/Books?name='+bookName);
    return response;
  }
  public getParticularHouse(houseName){
    let response = this.http.get(this.baseurl+'/houses?name='+houseName);
    console.log(this.baseurl+'/houses?name='+houseName);
    return response;
  }
  public getParticularCharacter(characterName){
    let response = this.http.get(this.baseurl+'/characters?name='+characterName);
    console.log(this.baseurl+'/characters?name='+characterName);
    return response;
  }
  public singleInfo(apiUrl){
    let singleResponse = this.http.get(apiUrl);
    return singleResponse;
  }

}
