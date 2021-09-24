const quotes = require('./data.json');





exports.HANDLE_GET_QUOTES =()=>{
    //Generate a random number using the array.length
    const index = Math.floor((Math.random() * quotes.length));


    if(quotes[index].text.length > 200){
        return this.HANDLE_GET_QUOTES()
    }
    return quotes[index];
}