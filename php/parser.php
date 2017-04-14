<?php 
//sprawdzamy czy jest juz stworzony plik z tekstami, jesli nie tworzymy go:
  if (!file_exists('testfile.php')){
  //biblioteka do pobierania html strony
  require('simple_html_dom.php');
  //pobieramy stronę z bazą cytatami;
  $singleurl="http://thoughtcatalog.com/christine-stockton/2013/08/the-50-funniest-quotes-from-friends/";
  //tworzymy tablice ze wszystkimi podstronami
  $allurlArray= array($singleurl);
  for ($i=2; $i<=6; $i++){
    array_push($allurlArray, $singleurl.$i);
  }
  //print_r($allurlArray);
  //tworzymy tablicę ze wszystkimi pobranymi html-ami
  $allhtmlArray= array();
  for ($i=0; $i<6; $i++)
  {
    array_push($allhtmlArray, file_get_html($allurlArray[$i]));
  }
  //tablica wszystkich naszych tekstow w sesji:
  $alltext=array();
  foreach ($allhtmlArray as $value) {
    foreach ($value->find('article p') as $element)
    //echo $element->plaintext . '<br>';
      array_push($alltext, $element->innertext . '<br>');
  }
  //tworzenie/otwieranie pliku
  $myfile = fopen("testfile.php", "w") or die("Unable to open file!");
  //wrzucamy do pliku tablice z tekstami
  file_put_contents("testfile.php", '<?php $alltext = ' . var_export($alltext, true) . ';');
  fclose($myfile);
  //print_r($_SESSION['alltext']) ;
}
  ?>