import { Iterator } from './iterator'
import { ReverseIterator } from './reverseIterator'
import { BookShelf } from './bookShelf'
import { Book } from './book'

const bookShelf: BookShelf = new BookShelf(4)
bookShelf.appendBook(new Book('こころ'))
bookShelf.appendBook(new Book('人間失格'))
bookShelf.appendBook(new Book('君の名は'))
bookShelf.appendBook(new Book('ハリーポッター'))

console.log('数え上げ')
const it: Iterator = bookShelf.iterator()

while (it.hasNext()) {
  console.log(<Book>it.next())
}

console.log('逆順で数え上げ')
const rit: ReverseIterator = bookShelf.reverseIterator()

while (rit.hasPrev()) {
  console.log(<Book>rit.prev())
}
