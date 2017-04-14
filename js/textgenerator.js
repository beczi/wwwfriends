$(document).ready(function(){
      var srcOfImg=$('#textAuthorImg').attr('src');
      var authors=["Rachel:", "Monica:","Joey:","Ross:","Chandler:", "Phoebe:","Janice:"];
      var newSrc=[];
      function photoChange(string) {
        var i=0;
        while (i<authors.length){
          if (string.search(authors[i])!==-1){
            var thatOne=authors[i].toLowerCase().slice(0, -1);
            //console.log(thatOne);
            newSrc.push(thatOne);
            //console.log(newSrc);
          }
          i++;
        }
        //return newSrc;
        $(".photoContainer").animate({opacity:0}, 500, function(){
          $(".photoContainer img").remove();
          for (var i=0; i<newSrc.length; i++){
          //console.log("#"+newSrc[i]);
          var person=newSrc[i];
          //console.log('<img id="'+person+'" src="'+person+'.png" />');
          $(".photoContainer").prepend('<img id="'+person+'" src="img/'+person+'.jpg" />');
        }
        $(".photoContainer").animate({opacity:1}, 500);
        newSrc=[];
        });
        }
        var factsArray=['Joey i Rachel mieli swój romantyczny epizod w serialu, ale cała ekipa była temu bardzo przeciwna i uprosiła scenarzystów o nierozwijanie go. Matt LeBlanc w 2012 przyznał, że ten wątek był dla nich &#8222;nie na miejscu&#8221;.',
'Courteney Cox jest jedyną z szóstki głównych aktorów, która nie dostała żadnej nominacji do nagrody Emmy za rolę Moniki.','Za to Christina Applegate, grająca siostrę Rachel, odebrała statuetkę za występ wyłącznie w jednym odcinku.',
'Nagrodę otrzymały także Lisa Kudrow i Jennifer Aniston, czyli Phoebe i Rachel.','Matt LeBlanc farbował włosy na czarno od samego początku serialu. Już w pierwszym odcinku (kiedy Joey miał jeszcze długie włosy) aktor zaczynał siwieć.',
'Opera mydlana &#8222;Dni naszego życia&#8221; nie tylko była prawdziwym serialem, o czym pisałam w poprzedniej części, ale też rolę podobną do tej, którą w serialu grał Joey (dr Drake Ramorey), odgrywał ojciec Jennifer Aniston.','W poprzedniej części wymieniałam, kto z kim się całował (m.in. Joey z Rossem i Phoebe z Chandlerem). W całym serialu wszyscy całowali się z wszystkimi &#8211; poza Moniką i Phoebe 😉',
'Po latach od zakończenia serialu Jennifer Aniston przyznała, że na planie serialu ona i pozostałe dwie aktorki zawsze jadły to samo &#8211; Jennifer przynosiła ogromne opakowanie sałatki dla nich trzech.',
'Prawdziwy adres bloku, w którym mieszkają przyjaciele, to 90 Bedford Street, Manhattan West Village.',
'Na początku serialu, kiedy jeszcze ten wątek nie był planowany, Courteney Cox stale przekonywała scenarzystów, że powinni połączyć ją i Chandlera.',
'Ekipa Przyjaciół nie tylko negocjowała wynagrodzenia jako grupa &#8211; mieli umowę, że jeśli jedna osoba z ekipy odchodzi, wszyscy rezygnują.',
'Początkowo rolę Rachel miała otrzymać Tea Leoni (była żona Davida Duchovnego, ostatnio grała m.in. w serialu Madam Secretary).',
'Ta jednak odrzuciła propozycję, gdy swojej nie przyjęła Ellen DeGeneres (miała grać Phoebe).',
'Aktorka grająca agentkę Joeya, zagrała również pielęgniarkę w odcinku, w którym była żona Rossa, Carol, rodzi jego syna.',
'Lisa Kudrow bardzo bała się kaczki, która mieszkała przez kilka sezonów w mieszkaniu Chandlera i Joeya.',
'Oprócz Isabelli Rossellini, którą Ross w ostatniej chwili wyrzucił ze swojej listy gwiazd, z którymi chciałby uprawiać seks (a jego ówczesna dziewczyna, czyli Rachel, nie może mieć pretensji), w serialu pojawiły się też dwie aktorki z listy &#8211; Winona Ryder i Susan Sarandon.',
'Ozdobny gipsowy pies z mieszkania Joeya w rzeczywistości należał do Jennifer Aniston.',
'Matthew Perry przez 5 miesięcy musiał &#8222;usługiwać&#8221; Courteney Cox &#8211; przegrał z nią zakład.',
'Ross jest w serialu dwa lata starszy od Moniki &#8211; w rzeczywistości David Schwimmer jest młodszy od Courteney Cox o 3 lata.',
'Kadry w czołówce Przyjaciół były zmieniane średnio dwa razy na sezon (co daje min. 20 różnych intr).',
'Sławna fryzura Rachel z czasów Przyjaciół stała się kultowa i znana na całym świecie. Jennifer Aniston przyznała, że fryzura powstała przypadkiem, a ona sama jej&#8230; nie lubiła.',
'Niedługo po emisji odcinka z gościnnym udziałem Julii Roberts, Matthew Perry i ona naprawdę zostali parą. Związek jednak nie przetrwał zbyt długo.',
'W serialu gościnnie wystąpiło 11 aktorów i aktorek, którzy zdobyli Oscara.',
'Pierwszy odcinek serialu ma oficjalny tytuł &#8222;The Pilot&#8221;, ale ma również trzy inne, alternatywne tytuły: &#8222;The One Where it All Began”, “The One Where Monica Gets a New Roommate” i “The First One”.',
'Po zakończeniu serialu powstał spin-off pod tytułem Joey, ale nie zdobył podobnej popularności.',
'W momencie premiery serialu relatywnie najbardziej znaną gwiazdą obsady była Courteney Cox.',
'Jednak po finale najszybciej rozwinęła się kariera Jennifer Aniston.',
'Za to Courteney Cox stała się pierwszą kobietą, która użyła słowa &#8222;okres&#8221; w amerykańskiej telewizji. Wystąpiła w reklamie tamponów.',
'Serial zgarnął łącznie 60 różnych nagród.',
'Był nominowany 153 razy.',
'Friends to serial&nbsp;nominowany 63 razy do nagród Emmy, ale otrzymał tylko 6 statuetek.',
'Aktor, który grał Bena, syna Rossa, ma obecnie 23 lata.',
'Lisa Kudrow zagrała w serialu &#8222;Szaleję za Tobą&#8221; przed premierą Przyjaciół rolę Ursuli Buffay (serialowej bliźniaczki Phoebe)!',
'Matt LeBlanc nie radził sobie najlepiej z rolami przed występem w serialu, dlatego ma na swoim koncie występ w jednym z filmów&#8230; dla dorosłych.',
'Jennifer Aniston i Courteney Cox były przyjaciółkami nie tylko w serialu, przyjaźnią się do tej pory prywatnie.',
'Na ostatnim odcinku serialu telewizja NBC zarobiła 70 milionów dolarów.',
'Pierwsza kwestia, która padła w serialu, to &#8222;There&#8217;s nothing to tell&#8221;.',
'A ostatnia &#8211; Rachel: Should we get some coffee? Chandler: Sure! Where?',
'Drugie imię Rossa to Eustance.',
'Matthew Perry pomagał scenarzystom w rozpisywaniu żartów dla całej ekipy aktorów.',
'Ojciec Matthew Perry&#8217;ego (Chandlera) też miał swój epizod w serialu. Zagrał ojca chłopaka Rachel &#8211; Joshuy.',
'Jennifer Aniston nie lubiła Reese Whitherspoon, dlatego przekonała scenarzystów do szybszego zwolnienia Reese.',
'W zamian za to w serialu pojawiła się druga siostra Rachel grana przez Christinę Applegate.',
'Aktor grający Gunthera sam dorobił teorię do tego, dlaczego jego postać była wiecznie marudna i zła. Według niego mieszkał 15 stacji metra od Central Perk i dobijały go dojazdy.',
'Kod pin do karty Joeya to 5639.',
'W jednym z odcinków statystą w serialu jest Ian Thorpe.',
'Scena zerwania Rossa i Julie została przedstawiona bardzo absurdalnie i zwięźle, żeby nie przywiązywać widzów zanadto do tej relacji, a skupić ich uwagę na Rossie i Rachel.',
'Pierwszą kobietą z ekipy, którą pocałował serialowy Chandler, była&#8230; Rachel!',
'Matt LeBlanc grywał w reklamach nie tylko w serialu. W rzeczywistości zgarnął nawet nagrodę za reklamę keczupu.',
'W jednym z odcinków gościnnie wystąpili Robin WIlliams i Billy Crystal. Zagrali w serialu przez przypadek, ponieważ znaleźli się w tym samym budynku, w którym kręcono sceny.',
'Przed nagraniem każdego odcinka szóstka aktorów zbierała się w kółku i dodawała sobie energii oraz życzyła powodzenia jak zawodnicy sportowi.','W każdym odcinku, w którym widoczne były drzwi apartamentu Chandlera i Joeya, na drzwiach wisiała tabliczka do notowania i znajdował się na niej nowy rysunek. Za wszystkie te obrazki odpowiedzialny był Paul Swain, członek ekipy &#8222;Przyjaciół&#8221;.',
 'Paul Swain zagrał też w dwóch odcinkach serialu, jednak tylko raz został wspomniany w napisach końcowych',
 'Cały serial miał 236 odcinków.',
 'I widownię na poziomie 52 milionów widzów.',
 'Roboczy tytuł serialu to &#8222;Insomnia Caffe&#8221;',
 'I w myśl pierwszej wersji główny wątek romantyczny miał kręcić się wokół Moniki i Joeya.',
 'Później serial dostał jeszcze 4 kolejne, robocze, tytuły, ale żaden z nich nie przetrwał.',
 'Czołówka serialu kręcona była o 5 rano i na planie było upiornie zimno. Stąd też pomysł na taniec w fontannie, która&#8230; miała podgrzewaną wodę.',
 'Premiera pierwsza odcinka miała miejsce 22 września 1994.',
 'Pilot serialu został obejrzany przez 21 milionów widzów, ale recenzje krytyków po emisji nie były zgodne &#8211; zdarzały się zachwyty, ale i mocna krytyka (np. na temat prostackiego humoru).',
 '30-sekundowa reklama wyświetlana przed finałem 10. sezonu serialu kosztowała 2 miliony dolarów.',
 'Aktorzy w pierwszym sezonie otrzymywali 22,5 tysiąca dolarów za 1 odcinek. W kolejnych podbijali stawki do 1 MILIONA DOLARÓW za odcinek w dziewiątym i dziesiątym sezonie.',
 'Aktorzy mieli mocną kartę przetargową przy negocjacjach wynagrodzenia &#8211; byli pierwszymi, którzy negocjowali gaże jako grupa, a nie pojedynczy aktorzy.',
 'Producenci serialu mieli w zwyczaju wprowadzać prawdziwe gwiazdy w epizodycznych występach. W ten sposób przez plan przewinęli się między innymi: Brad Pitt, Jean Claude Van Damme, Bruce Willis, Robin Williams, Susan Sarandon, Alec Baldwin, Ben Stiller, Brooke Shields, Isabella Rossellini, Christina Applegate, David Arquette (prywatnie mąż Courteney Cox, czyli Moniki &#8211; obecnie już były mąż), George Clooney, Julia Roberts, Reese Whitherspoon, Sean Penn czy Hugh Laurie (jeszcze w czasach przed główną rolą w serialu House, więc w tamtym okresie jego pojawienie się nie zrobiło wielkiej niespodzianki).',
 '<a href="https://www.youtube.com/watch?v=gFIS8a0r2LY" target="_blank">Bruce Willis wystąpił w serialu</a> za darmo. Przegrał zakład z Matthew Perrym (Chandlerem) i to była jego kara. Jego gaża została przekazana na cele charytatywne.',
 'Bruce Willis za rolę Paula otrzymał nagrodę Emmy.',
 'Brad Pitt pojawił się gościnnie w serialu w czasach, kiedy prywatnie był mężem serialowej Rachel (Jennifer Aniston).',
 'Serialowa Janice miała być parodią bohaterki innego serialu &#8211; &#8222;Niania&#8221;.',
 'David Schwimmer, czyli Ross, został wybrany jako pierwszy do obsady i wiele wątków oraz kwestii było już pisanych pod jego osobę.',
 'Na rolę Rossa miał też szanse Mitchell Withfield &#8211; jednak przegrał z Davidem Schwimmerem. Miał jednak swoją rolę w serialu &#8211; grał Barry&#8217;ego, byłego narzeczonego Rachel.',
 'Każdy odcinek serialu trwa około 20 minut. Jego nagrywanie zabierało zwykle około 5 godzin, a cała produkcja, montaż, itd. &#8211; 20 godzin.',
 'Pomimo tego, że niektóre sceny kręcono kilkukrotnie, to odcinki były nagrywane przed publicznością, nawet 300-osobową. Bez udziału publiki dokręcane były tylko cliffhangery.',
 'Courteney Cox brała udział w castingu i prowadzący chcieli, żeby była Rachel. Jednak ona sama stwierdziła, że bardziej pasuje do Moniki i udało jej się przekonać do tego twórców serialu.',
 'Stało się to również dlatego, że zmieniły się plany wobec Phoebe (Lisa Kudrow) i Chandlera (Matthew Perry). Ich role były rozpisane jako drugoplanowe, jednak widzowie tak polubili obie postaci, że postawiono na równorzędne role całej szóstki, a wątek romantyczny rozpisano między Monicą a Chandlerem.',
 'Sama Phoebe miała być mroczną gotką, stale chodzącą w czarnych ubraniach, ale zmieniono to na bardziej hipisowski wizerunek.',
 'Początkowo producenci chcieli, aby rolę Phoebe zagrała Ellen DeGeneres, jednak ta odrzuciła propozycję. Kolejnym wyborem była Lisa Kudrow',
 'Chandler Bing ma również drugie imię, przez połowę serialu znamy wyłącznie jego pierwszą literę &#8211; M. Pełne imiona i nazwiska to Chandler Muriel Bing.',
 'Chandler co tydzień odbierał pocztę z programem telewizyjnym. Jego przesyłka była adresowana na Panią Chanandler Bong.',
 'Piosenka, która jako pierwsza została wybrana jako przewodnia w serialu, to &#8222;Shiny happy people&#8221; R.E.M., jednak zastąpiono ją po emisji pilota utworem The Rembrandts.',
 'Sceny z serialu, które przeplatały się w intrze serialu, były zmieniane co kilka-kilkanaście odcinków. W premierowym odcinku szóstego sezonu <a href="https://www.youtube.com/watch?v=Epj9XM5x0Hk" target="_blank">wszyscy aktorzy otrzymali drugie nazwisko &#8211; Arquette</a>. Był to żart i forma gratulacji dla Courteney Cox, który wzięła pomiędzy sezonami ślub z Davidem Arquette.',
 'W wywiadzie po finale &#8222;Przyjaciół&#8221; Lisa Kudrow przyznała, że nie rozumiała, dlaczego jej postać miała grać na gitarze, nie lubiła tego na początku i proponowała jakiś inny instrument. Twórcy wysłali ją nawet na lekcję nauki gry na gitarze, jednak zrezygnowała po kilku. I stwierdziła, że jej postać będzie znać tylko kilka akordów, które nazwie po swojemu.',
 'Wątek Phoebe rodzącej dzieci swojemu bratu był napisany specjalnie, żeby nie eliminować Lisy Kudrow z gry. W tym czasie aktorka sama była w ciąży, dopasowano więc wątki serialowe do niej.',
 'Aktor grający przyrodniego brata Phoebe (Giovanni Ribisi), zanim został przedstawiony w serialu, miał epizodyczną, anonimową rolę &#8211; zagrał człowieka, który w ramach &#8222;wynagrodzenia&#8221; za grę Phoebe na gitarze na chodniku, wrzuca do jej futerału prezerwatywę&#8230;',
 'W 10. sezonie w ciąży była Courteney Cox, jednak niemożliwym było rozpisanie tego wątku w serialu, bo już wcześniej ustalone zostało, że Monica i Chandler nie mogą mieć dzieci. Dlatego też ciążę Moniki ukrywano pod ubraniami i odpowiednim ustawianiu aktorki do kamery.',
 'Mieszkanie, w którym mieszkały Monica i Rachel, miało w początkowych odcinkach numer 5. Potem zamieniono go na 20.',
 'Stojąca w ich mieszkaniu lodówka naprawdę była włączona. W środku znajdowały się napoje i woda dla całej ekipy.',
 'W szóstym sezonie serialu można było zobaczyć <a href="https://www.google.pl/webhp?sourceid=chrome-instant&amp;ion=1&amp;espv=2&amp;ie=UTF-8#q=chandler%20kisses%20everyone" target="_blank">całujących się</a>: Rossa i Rachel, Monicę i Chandlera, Rachel i Joeya, Phoebe i Joeya, Phoebe i Rossa, Chandlera i Rachel, Chandlera i Phoebe, Rachel i Monicę, Joeya i Chandlera i Rossa i Joeya!',
 'Jeśli zastanawialiście się kiedyś, dlaczego ekipa zawsze mogła usiąść przy tym samym stoliku w Central Perk, to odpowiedzi<a href="http://www.bustle.com/articles/59138-the-central-perk-couch-on-friends-was-always-unoccupied-for-a-reason-you-never-noticed" target="_blank"> poszukała Tanya Ghahremani</a> &#8211; stolik był dla nich zarezerwowany 😉',
 'Wystrój kawiarni był zmieniany co 3 odcinki &#8211; na ścianach pojawiały się dzieła amerykańskich, mało znanych artystów.',
 'W pilocie serialu Monica przedstawia Rachel Chandlerowi, jakby nigdy się nie znali. W kolejnych sezonach dowiadujemy się, że to nieprawda.',
 'W pierwszych odcinkach producenci rozważali, czy Chandler nie powinien być w serialu gejem. Ostatecznie z tego zrezygnowali, jednak żart z tego, że każdy myślał, że jest, towarzyszył im do końca serii (i prawdopodobnie nigdy później nie przeszedłby już w żadnym serialu, ale to niejedyny motyw, który nie ma zbyt wiele wspólnego z poprawnością polityczną)',
 'Tylko w drugim sezonie serialu nie było odcinka o święcie Dziękczynienia.',
 'W tym samym sezonie konieczne były cięcia budżetowe, przez które powstał odcinek &#8222;The one where no one&#8217;s ready&#8221;, który był kręcony tylko w mieszkaniu Moniki i Rachel i nie grał w nim nikt inny poza szóstką przyjaciół.',
 'W momencie premiery serialu aktorzy mieli od 25 do 31 lat. Najmłodsza była Jennifer Aniston i Matthew Perry (25), najstarsza &#8211; Lisa Kudrow (31).',
 'Jennifer Aniston chciała odejść po 9. sezonie serialu, dała się jednak przekonać do pozostania w nim i nagrania finałowego sezonu.',
 'Cała ekipa odmówiła jednak dalszej pracy przy serialu, ponieważ uznali, że ewentualne sezony po 10. nie będą już tak dobre i chcą odejść w odpowiednim momencie.',
 'Scenarzyści początkowo planowali zakończenie serialu bez udzielenia jednoznacznej odpowiedzi, czy Ross i Rachel będą razem. Jednak naciski ze strony publiczności były tak duże, że postanowili zakończyć wszystko odpowiednim happy endem.',
 'David Schwimmer reżyserował 10 odcinków 10. serii serialu.',
 'W wyniku przegranego zakładu, sprzeczek, rozstań, zmian w ciągu całego serialu każdy z szóstki mieszkał zarówno w mieszkaniu Moniki, jak i w mieszkaniu Chandlera i Joeya.',
 'Opera mydlana &#8222;Dni naszego życia&#8221;, w której grał serialowy Joey, była prawdziwym serialem kręconym w tamtym czasie.'];
 var factNum=0;
 function factsChanger(){
  
  $('.factsContainer').html(factsArray[factNum]);
  if (factNum>=factsArray.length){
  factNum=0;
  }
  else
  factNum++;
 }

      
      //console.log (factsArray);
      $('#button').on('click', function (){
        
        $.ajax({
        type: "POST",
        url: 'randomtext.php',
        dataType: 'html',
        data: {action: "yes"},
        
        
        success: function(response){
          $(".randomtext").animate({
            opacity: 0
              }, 500,
              function() {
            $(this).animate({
              opacity: 1
            }, 500);
            $('.randomtext').html(response);
          });
        photoChange(response);
        

        
           }
    });
    });
      $('#interestingFacts').on('click', function (){
        
      factsChanger();
    });

});