let mylibrary = [];
let i=0;
const areaofshow = document.querySelector('.content');

function bookprototype(title,author,pages,readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

}


if(localStorage.getItem("library") === null ){
    mylibrary = [];
}else{
    const booksFromLocalStorage = JSON.parse(localStorage.getItem("library"));
    mylibrary = booksFromLocalStorage;
    showbooks();
}



function addBooksToStorage(){
    localStorage.setItem('library',JSON.stringify(mylibrary));
}



const submitbut = document.querySelector('#forminputs');
submitbut.addEventListener("submit",(e) =>{
    e.preventDefault();
    const bookTitleInput = document.querySelector('#Title').value;
    const bookAuthorInput = document.querySelector('#Author').value;
    const bookPagesInput = document.querySelector('#Pages').value;
    const newbook = new bookprototype(bookTitleInput,bookAuthorInput,bookPagesInput,true);
    mylibrary.push(newbook);
    addBooksToStorage();
    console.log(mylibrary.length);
    showbooks();
    submitbut.reset(); 
    cancellingform();
    window.location.reload();  
})


const divremove = document.querySelectorAll(".removebtn")
divremove.forEach((singlecard)=>{
    singlecard.addEventListener("click",(e) =>{
        for(let i=0; i<mylibrary.length;i++){
            if (mylibrary[i].title === e.target.parentNode.parentNode.children[1].innerHTML)
            {
                mylibrary.splice(i,1)
                addBooksToStorage();
                showbooks();
                window.location.reload();
            }
        }
        })
}
)




function showbooks(){

    areaofshow.innerHTML = "";
    const localBooklist  = JSON.parse(localStorage.getItem('library'))
    localBooklist.forEach((data)=> {
        const rmbtn = document.createElement('div');
        rmbtn.className = 'cardrmbtn';
        const imgrm = document.createElement('img');
        imgrm.src = "./images/remove.png"
        imgrm.className = 'removebtn' 
        rmbtn.appendChild(imgrm);
        const carddiv = document.createElement('div');
        carddiv.className = 'card';
        carddiv.id = `${i++}`
        const titlep = document.createElement('p');
        titlep.className = `innercard booktitle `;
        titlep.innerHTML = `${data.title}`;
        const authorp = document.createElement('p');
        authorp.className = 'innercard';
        authorp.innerHTML = `${data.author}`;
        const pagesp = document.createElement('p');
        pagesp.className = `innercard`;
        pagesp.innerHTML = `${data.pages}`;
        
        carddiv.appendChild(rmbtn);
        carddiv.appendChild(titlep);
        carddiv.appendChild(authorp);
        carddiv.appendChild(pagesp);
        areaofshow.appendChild(carddiv)
    }
    )
}










  
  //buttons to show the form

  const displayform = () => {
      inputdiv.style.display = 'flex';
      inputdiv.classList.add('fooorm');
      formthing.style.display = 'flex'; 
  }

const inputdiv = document.querySelector('.formwrap');
const formthing = document.querySelector('.form');

const addbookbtn = document.querySelector('#addbook');
const addbookbtn2 = document.querySelector('#mblbtn');
addbookbtn.addEventListener('click',displayform);
addbookbtn2.addEventListener('click',displayform);

//button to remove the form form the pages

const cancellingform = ()=>{
    inputdiv.style.display = 'none';
    inputdiv.classList.remove('fooorm');
    formthing.style.display = 'none'; 
}
const cancelbtn = document.querySelector('#cancelbtninform');

cancelbtn.addEventListener('click',cancellingform)






















