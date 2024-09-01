// keep track of current page and limit of books per page
const BASE_URL = `http://localhost:3000/books`;

let lastPage = "";
let accPage = 1;

// json-server 1.0
// _order=desc nie działa => za to _sort= - wartosc
// _page= coś nie dziła => za to _per_page
// _like nie dziala

function createDelBtn(id) {
  const btn = document.createElement("button");
  btn.innerText = `Delete`;
  btn.addEventListener("click", function () {
    deleteBook(id);
  });
  return btn;
}
function createBtn(id, name) {
  const btn = document.createElement("button");
  btn.innerText = `${name}`;
  btn.addEventListener("click", function () {
    const parent = this.parentNode;
    let oldTitle;
    let newTitle;
    switch (this.innerText) {
      case "Edit":
        oldTitle = parent.firstChild.textContent.split(`"`)[1];
        newTitle = parent.firstChild.textContent.split(`"`);
        newTitle[1] = "";
        newTitle = newTitle.join(`"`);
        parent.firstChild.textContent = `${newTitle.slice(2)}`;
        const input = document.createElement("input");
        input.value = oldTitle;
        parent.prepend(input);
        input.select();
        btn.innerText = "Save";
        break;
      case "Save":
        newTitle = parent.firstChild.value;
        parent.removeChild(parent.firstChild);
        oldTitle = parent.firstChild.textContent;
        parent.firstChild.textContent = `"${newTitle}" ${parent.firstChild.textContent}`;
        //Tu mozna walidacje czy pole jest poprawnie wypełnioone
        editBookTitle(id, newTitle);
        btn.innerText = "Edit";
        break;
      case "Delete":
        deleteBook(id);
        break;
      default:
        break;
    }
  });
  return btn;
}
async function loadBooks() {
  const bookList = document.getElementById("book-list");
  const pageInfo = document.getElementById("page-info");
  const itemAmount = document.getElementById("item-amount");
  const sortSelect = document.getElementById("sort");
  const sortOption = sortSelect.querySelector(
    `:nth-child(${sortSelect.selectedIndex + 1})`
  );
  const _page = `&_page=${accPage}`;
  const _limit = `&_limit=${itemAmount.value}`;
  const _sort = `&_sort=${sortOption.value}`;
  const _order = `&_order=${sortOption.getAttribute("sort")}`;
  //rozwiazanie dla servera 1.0 zamiast desc/asc uzywac -/+ w html
  // if (sortOption.getAttribute("sort") === "-") {
  //   _sort = `&_sort=-${sortOption.value}`;
  // }
  let _author = "";
  if (document.getElementById("filter-author").value !== "") {
    _author = `&author_like=${document.getElementById("filter-author").value}`;
  }
  bookList.innerHTML = "";
  try {
    // // sprawdzanie jaki dostaje link
    // console.log(
    //   `Link: ${BASE_URL}?${_author}${_sort}${_order}${_page}${_limit}`
    // );
    const totalReq = await fetch(`${BASE_URL}?${_author}${_sort}${_order}`);
    let _total = await totalReq.json();
    _total = _total.length ? _total.length : 1;
    lastPage = Math.ceil(_total / parseInt(itemAmount.value));
    if (accPage > lastPage) {
      accPage = lastPage;
      loadBooks();
      return;
    }
    pageInfo.innerHTML = `Page ${accPage}`;
    // lastPage = books.last;
    // accPage = books.next ? books.next - 1 : books.last; //server 1.0
    // accPage = Math.ceil(lastPage / itemAmount.value);
    // console.log({ accPage, lastPage, _total });
    const req = await fetch(
      `${BASE_URL}?${_author}${_sort}${_order}${_page}${_limit}`
    );
    const books = await req.json();
    //books.items !==0  //zamiast length json-server 1.0
    if (books.length !== 0) {
      books.forEach((el) => {
        const li = document.createElement("li");
        li.innerHTML = `"${el.title}" autorstwa: "${el.author}" z ${el.year} roku.`;
        const edit = createBtn(el.id, "Edit");
        const del = createBtn(el.id, "Delete");
        li.append(edit, del);
        bookList.append(li);
      });
    } else {
      bookList.innerHTML = "Brak elementow do wyświetlenia";
      accPage = 1;
      lastPage = 1;
    }
  } catch (err) {
    console.error("ERROR: ", err);
  }
}

async function addBook() {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const year = document.getElementById("year");
  // let id = 0;
  // try {
  //   const idRes = await fetch(`${BASE_URL}`);
  //   const total = await idRes.json();
  //   id = total.length + 1;
  //   // id = Math.floor(Math.random() * 100);
  // } catch (err) {
  //   console.error("ERROR: ", err);
  // }
  const body = {
    // id: `${id}`, //tak lepiej bo unikalne id dostaje i nie ma problemow przy usowniu i dodawaniu
    title: title.value,
    author: author.value,
    year: parseInt(year.value),
  };
  let res;
  try {
    res = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    window.alert(`Book added:
  Title: ${body.title}
  Author: ${body.author}
  Year: ${body.year}`);
  } catch (err) {
    console.error("ERROR: ", err);
  }
  // return res.json();
  // loadBooks();
}

async function deleteBook(id) {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    console.error("ERROR: ", err);
  }
  loadBooks();
}
async function editBookTitle(id, title = "") {
  const updatedTitle = {
    title: `${title}`,
  };
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTitle),
    });
  } catch (err) {
    console.error("ERROR: ", err);
  }
  loadBooks();
}
function nextPage() {
  if (accPage === lastPage) {
    return;
  }
  ++accPage;
  loadBooks();
}

function prevPage() {
  if (accPage === 1) {
    return;
  }
  --accPage;
  loadBooks();
}

// load books once DOM content is loaded
document.addEventListener("DOMContentLoaded", loadBooks);

// Additional tasks
// 1. add select to chose how many elements we want to see on a page
// 2. edit books, only name of the book
// 3. sortowanie rosnące i malejące dla roku i tytułu
