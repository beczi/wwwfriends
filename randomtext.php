<?php
//Bufor dla zaincludowanego pliku z tekstami. Bez tego na stronie wyświetla się caly plik.
ob_start();
include_once('testfile.php');
ob_end_clean();
//Losowanie tekstu.
$singletext=array_rand($alltext);
echo $alltext[$singletext];
?>