import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useCallback'
}

type BookSecretPropsType = {
    books: Array<string>
    addBook: () => void
}

const BooksSecret = (props: BookSecretPropsType) => {
    return <div>
        <button onClick={()=>props.addBook()}>Add book</button>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}

const Books = React.memo(BooksSecret);

export const LikeUseCallback = () => {
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"]);

    const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLowerCase().indexOf('a') > -1);
        return newArray;
    }, [books]);

    const addBook = () => {
        const newBooks = [...books, 'Angular' + new Date().getTime()];
        setBooks(newBooks);
    }

    const memorizedAddBook = useMemo(() => {
        return addBook
    }, [books]);

    ///2nd variant
    /*const memorizedAddBook = useMemo(() => {
        return() => {
            const newBooks = [...books, 'Angular' + new Date().getTime()];
            setBooks(newBooks);
        }
    }, [books]);*/

    const memorizedAddBook2 = useCallback(() => {
        const newBooks = [...books, 'Angular' + new Date().getTime()];
        setBooks(newBooks);
    }, [books]);

    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        {counter}
        <Books books={newArray} addBook={memorizedAddBook2}/>
    </>
}