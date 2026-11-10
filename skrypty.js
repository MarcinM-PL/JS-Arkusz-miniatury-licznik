let wynik = document.getElementById("skrypt")
function licznik(){
    if(localStorage.getItem('liczba') == null){
        localStorage.setItem('liczba',0)
        localStorage.setItem('liczba', Number(localStorage.getItem('liczba'))+1)
        wynik.innerHTML = `Liczba wejść na stronę: ${localStorage.getItem('liczba')}`
    }
    else{
        localStorage.setItem('liczba', Number(localStorage.getItem('liczba'))+1)
        wynik.innerHTML = `Liczba wejść na stronę: ${localStorage.getItem('liczba')}`
    }
}