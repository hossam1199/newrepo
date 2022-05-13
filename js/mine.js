var quote =[ `“Be yourself; everyone else is already taken.”
― Oscar Wilde`   , `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
― Marilyn Monroe` , `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`              ]

localStorage.setItem("wisdom",quote)




function generateQuote(){

document.getElementById("auther").innerHTML = quote[Math.random]

}