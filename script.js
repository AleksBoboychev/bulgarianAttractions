const quoteTitle = document.getElementById('text');
const quoteText = document.getElementById('longtext');
const picture = document.getElementById('photo');
const twitterBtn = document.getElementById('twitter');

function w3_open() {
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("myOverlay").style.display = "block";
  }
   
  function w3_close() {
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("myOverlay").style.display = "none";
  }
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteTitle.textContent} - ${quoteText.textContent}`;
    window.open(twitterUrl, '_blank');
  }
twitterBtn.addEventListener('click', tweetQuote);