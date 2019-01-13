import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public allBooks;
  public bookConstant = 1;
  public bookName;

  constructor(public _request:RequestService) { }

  ngOnInit() {
    this.allBooks = this._request.getAllBooks(this.bookConstant).subscribe(

      data =>{
        this.allBooks = data;
      },
      error =>{
        console.log(error);
      }
    )
    }
    paginationNext(){
      this.bookConstant = this.bookConstant + 1;
      this.allBooks = this._request.getAllBooks(this.bookConstant).subscribe(

        data =>{
          this.allBooks = data;
        },
        error =>{
          console.log(error);
        }
      )
    }
    paginationPrev(){
      this.bookConstant = this.bookConstant - 1;
      this.allBooks = this._request.getAllBooks(this.bookConstant).subscribe(

        data =>{
          this.allBooks = data;
        },
        error =>{
          console.log(error);
        }
      )
    }
    searchBook(){
      this.allBooks = this._request.getParticularBook(this.bookName).subscribe(

        data =>{
          this.allBooks = data;
        },
        error =>{
          console.log(error);
        }
      )
    }
  }

