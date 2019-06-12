function calculateFuelToOffload() {
    var totalDistanceToTravel = prompt('Jaki jest całkowity dystans, który chcesz przebyć, w kilometrach? Wpisz liczbę.');
    var averageLitersOverHundred = prompt('Jakie jest średnie zużycie paliwa twojego statku, w litrach? Wpisz liczbę.');
    var tankCapacity = prompt('Jaka jest całkowita pojemność twojego zbiornika? Wpisz liczbę.');

    var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
    var fuelToOffload = tankCapacity - requiredFuel;

    alert('Konieczna ilość paliwa potrzebna do powrotu: ' + requiredFuel + ' L\n' + 'Ilość paliwa do zrzucenia: ' + fuelToOffload + ' L');
}

calculateFuelToOffload();
