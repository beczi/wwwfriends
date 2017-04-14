
<!DOCTYPE HTML>
<html lang="pl">
<head>
  <meta charset="utf-8" />
  <title>How you doin?</title>
  <meta name="description" content="Wylosuj cytat z Przyjaciół" />
  <meta name="keywords" content="friends" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <link href="http://fonts.googleapis.com/css?family=PT+Sans:700|Pacifico|Changa+One"> 
  <link rel="stylesheet" href="css/style.css" type="text/css" />
  <link href="https://fonts.googleapis.com/css?family=Architects+Daughter|Indie+Flower|Reenie+Beanie|Shadows+Into+Light|Shadows+Into+Light+Two" rel="stylesheet"> 
  <script src="js/jquery.js" ></script>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  
  
</head>

<body>
<section class="module parallax parallax-1">
  <div class="container container1">
    <img src="img/Friends_logo.svg"/>
  </div>
</section>
 
<section class="module content content1">
  <div class=" container2">
    <h2>Najlepsze teskty</h2>
    
    <div class="textAuthor">
    <div class="photoContainer">
      <img src="img/joey.gif">
    </div>
      <button id="button">Losuj</button>
    </div>
    <div class="textContainer">
        <p class="randomtext">"How you DOIN?"</p>

    </div>
  </div>
</section>
 
<section class="module parallax parallax-2">
  <div class="container">
    <h1>Najlepsze momenty</h1>
  </div>
</section>
 
<section class="module content content2">
  <div class="menu">
    <ul>
      <li><a id="interestingFacts">Ciekawostki</a></li>
      <li><a href="#" id="gifs">Gify</a></li>
      <li><a href="#" id="moments">Momenty</a></li>
      <li><a href="#" id="kitchen">Od kuchni</a></li>
    </ul>
  </div>
  <div class="container">
    <p class="factsContainer"></p>

    
    
    
  </div>
</section>
 
<section class="module parallax parallax-3">
  <div class="container">
    <h1>Sekcja 3</h1>
  </div>
</section>
 
<section class="module content">
  <div class="container">
    <h2>Lorem Ipsum</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</section>
<?php
include_once("php/parser.php");
?>
<script src="js/textgenerator.js" ></script>
<!--
<script type="text/javascript">
    $( document ).ready(function() {

      $(".bigger").on("touchend, click", function (e) {
            e.preventDefault();
            $('body,html').animate({scrollTop: $('.form-container,.scrollform').offset().top}, 400);
        });
    });

  </script>
  -->
</body>
</html>