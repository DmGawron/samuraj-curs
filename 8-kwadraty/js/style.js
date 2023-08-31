
   const btn = document.querySelector("button");
   //tworzymy zmienną za pomocą zmienne let ponieważ będziemy ją zmiennia. Wartość przechowywana w zmiennej będzie pełniła funkcję licznika
   let number = 1;
   // dodatkowy licznik, który ma liczyć do pięciu
   let activeNumber = 1;

   const addElement = function () {
      
       const div = document.createElement('div');
    
       div.textContent = number; 
    //    1 wersja if z modulo
       if (number % 5 == 0) {
           div.classList.add("circle")
       }

    //    if (activeNumber == 5) {
    //        activeNumber = 0;
    //        div.classList.add("circle");
    //    }

        number++; //inkrementacja
        activeNumber++;
      
        document.body.appendChild(div);

   }

   btn.addEventListener("click", addElement)