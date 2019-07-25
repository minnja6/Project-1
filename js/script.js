//Quotes, sources, citations, and years
let quotes = [
  { quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.',
    source: 'Leonardo da Vinci',
    citation: 'https://www.positivityblog.com/leonardo-da-vincis-top-six-tips-for-getting-things-done/',
    categories: 'motivational, inspirational'
  },

  { quote: 'When you think of quitting, remember why you started!',
    source: 'John Di Lemme',
  },
  
  { quote: 'The greatest discovery of all time is that a person can change his future by merely changing his attitude.',
    source: 'Oprah Winfrey',
    citation: 'https://www.entitymag.com/oprah-winfrey-quotes-inspire-drive/',
    categories: 'influencial, motivational'
  },
  
  { quote: "A good dancer is not necessarily defined by great technique, skill, or ability to pick up choreography but by confidence. When you feel the music, it penetrates to your soul. Everybody's a dancer. The greatest dancer is someone who is willing to dance, not afraid.",
    source: 'Alyssa Edwards',
    citation: 'https://www.brainyquote.com/quotes/alyssa_edwards_953175',
    categories: 'dance, positivity, inspirational'
  },

  { quote: "You could not direct the wind, but you could trim your sail so as to propel your vessel as you pleased, no matter which way the wind blew.",
    source: 'Cora L. V. Hatch',
    citation: "https://www.barrypopik.com/index.php/new_york_city/entry/we_cant_direct_the_wind_but_we_can_adjust_the_sails_proverb",
    year: '1859',
    categories: 'inspiring, thought-provoking, positive'
  },

  ];

//calls randomQuote
    function getRandomQuote(array) {
//generates randomQuotes using the randomNumber generator method  
    var quoteIndex = Math.floor(Math.random() * quotes.length);
    return quotes[quoteIndex];
  }

    //console.log (getRandomQuote()); -- Used to check work

//calling the printQuote function 
    function printQuote(){
//initializing the message variable with no string 
      var message = "";
      var result = getRandomQuote(quotes); 
  
//message variable and strings, + "if" conditions so quotes without citations and years won't post "undifined" in empty fields
    message += "<p class= 'quote'>" + result.quote + "</p>";
    message += "<p class='source'>" + result.source
    //creating "if" statements so "undefind" won't show if there is no citation, year or category.
    if (result.citation) {
    message += "<span class= 'citation'>" + result.citation + "</span>"; 
    }
    if (result.year) {
    message += "<p class= 'year'>" + result.year + "</p>";
    }
    if (result.categories) { message += "<p class= 'categories'>" + result.categories + "</p>"}
    console.log (message);
  
    document.getElementById ('quote-box').innerHTML =message;
 //calling background color
    random_bg_color();    
    }
//calling the function
    printQuote(); 

//random color generator  
    function random_bg_color() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    }
//timer to change quotes and color every 21 seconds
    setInterval(function(){ printQuote(); }, 21000);
  
//listens and responds when the "show another quote" button is clicked
    document.getElementById ('loadQuote').addEventListener ("click", printQuote, false); 
    

//I would like my project to exceed expectations!! :D
