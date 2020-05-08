const spnText = document.querySelector('.text');
const txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio?'
const txtWork = ['Czesc', 'Mam na imie aleh', 'Jestem frontendowcem']
const cursor = document.getElementById('cursor');



//parametry
let indexText = 0;
const time = 100;
let indexArray = 0;
let qwe = txtWork.length;
//implementacja
// const addLetter = () => {
//  spnText.textContent += txt[indexText];
//  indexText++;
//  if (indexText === txt.length) clearInterval(indexTyping);
// }

// let cursorActive = () => {
//     cursor.classList.toggle('migajacyCursor');
// }


// let  indexTyping = setInterval(addLetter, time);
// setInterval(cursorActive, 400);

//let asd = setInterval(function, time)
//clearInterval(asd) - break to setInterval

//implementacja(praca domowa - moje rozwiazanie)
const addLetterFromArray = () =>{ 
    cursor.classList.toggle('migajacyCursor');
    let word = txtWork[indexArray]
    spnText.textContent += word[indexText];
    ++indexText;
    if(indexText-1 === txtWork[indexArray].length){
        spnText.textContent = '';
        indexArray++;
        indexText = 0;
    }
    if(indexArray == qwe){
        indexArray = 0;
        indexText = 0;
    }
}

const asd = setInterval(addLetterFromArray, time);
