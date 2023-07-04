// Projekt 5 - Zadanie dla Ciebie
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase -
// pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ["jedEN", "DwA"];
const messages = ["super", "działa!"];

const div = document.querySelector("div");

passwords.forEach((password, i) => {
  passwords[i] = password.toLowerCase;
}); //zamiana liter w tablicy na małe, przy użyciu forEach - jest to jeden ze sposobów - drugi łatwiejszy .map

const showMessage = (e) => {
  //   div.textContent = "";
  //tutaj rozwiązanie
  // PS. nie skupiaj się na niczym innym w zadaniu niż porównanie i wyświetlenie
  //   ( nie rób czyszczenia inputa itp. nie są potrzebne, chyba że masz ochotę)
  const input = e.target.value.toLowerCase();
  passwords.forEach((password, i) => {
    if (password === input) {
      div.textContent = messages[i];
      //   e.target.value = "";
    }
  });
};

input.addEventListener("input", showMessage);
