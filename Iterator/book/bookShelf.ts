import {Aggregate} from './aggregate'
import {Book} from './book'
import {BookShelfIterator} from './bookShelfIterator'
import {Iterator} from './iterator'

export class BookShelf implements Aggregate {
  private books: Book[]
  private last = 0

  constructor(maxsize: number) {
    this.books = new Array(maxsize)
  }

  getBookAt(index: number): Book {
    return this.books[index]
  }

  appendBook(book: Book): void {
    this.books[this.last] = book
    this.last++
  }

  get length(): number {
    return this.last
  }

  iterator(): Iterator {
    return new BookShelfIterator(this)
  }
}
