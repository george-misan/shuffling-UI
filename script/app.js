let container = document.getElementById("container");
let cards = container.getElementsByTagName('div')
const shuffleButton = document.getElementById("shuffle-btn")
const sortButton = document.getElementById("sort-btn")
var elementsArray = [].slice.call(cards);



const shuffle = _ => {
    elementsArray.forEach((el) => container.removeChild(el))
    shuffleCards(elementsArray)
    elementsArray.forEach((el) => container.appendChild(el))
}


const shuffleCards = cards => {
    for (let i = cards.length - 1; i > 0; i--){
        let rand = Math.floor(Math.random() * (i + 1));
        let temp = cards[i];
        cards[i] = cards[rand];
        cards[rand] = temp;
    }

    return cards
}


const sortList = () => {
    const sortedArray = elementsArray.sort((a,b) => {
        return (a.innerHTML < b.innerHTML) ? -1 : (b.innerHTML > a.innerHTML) ? 1 : 0
    })

    sortedArray.forEach((el, index, arr) => container.appendChild(arr[index]))
}

shuffleButton.addEventListener('click', shuffle)
sortButton.addEventListener('click', sortList)


/* ---Sorting without the sort() function--- */

/* const sortList = () => {
  let i, swap, b, willSwap;
  swap = true;
  while (swap) {
    swap = false;
    b = container.getElementsByTagName("div");
    for (i = 0; i < (b.length - 1); i++) {
      willSwap = false;
      if (b[i].innerHTML > b[i + 1].innerHTML) {
        willSwap = true;
        break;
      }
    }
    if (willSwap) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      swap = true;
    }
  }
} */