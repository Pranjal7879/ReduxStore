
//  this is my 1st step in which i m making Action 

import {buy_book} from './BookTypes'

 const purchase_book = () => {
    return{
        type : buy_book
    }
}

export default purchase_book

// provider ko hum q likhte hai => jo bhi component likhenge hum apne app.js me ab wo store se acces kr paayenge 