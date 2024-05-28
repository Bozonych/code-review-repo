import {Component, Injectable, OnInit} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {RouterOutlet} from "@angular/router";
import {AsyncPipe, NgForOf} from "@angular/common";
export interface Book {
  id: any;
  title: string;
}

export interface BookListWithDescription {
  id: any;
  title: string;
  description: string;
}

@Component({
  selector: 'app-component-book-service-list',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './component-book-service-list.component.html',
  styleUrl: './component-book-service-list.component.css'
})
export class ComponentBookServiceListComponent implements OnInit {
  public bookList: Book[] = [];
  public booklistWithDescription: Observable<BookListWithDescription[]> = this.service.bookList.pipe(map(books => books.map( (book: Book) => this.addDescriptionToBooks(book)) ));

  constructor(private service: BookListService ) {
  }

  public ngOnInit() {
    this.service.bookList.subscribe(books => {
      // set books to bookList
      this.bookList = books;
      console.log(this.bookList);
    })
  }

  public addDescriptionToBooks(book: Book): any  | BookListWithDescription{
    (book as BookListWithDescription).description = ' Test Description';
    debugger;
    return book;
  }

}


@Injectable()
export class BookListService {
  public bookList: Observable<any> = of([{id: 1, name: 'Test Book 2'}, {id:2, name: "Test Book 3"}])
}
