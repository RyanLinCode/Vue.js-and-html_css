// blog
class Blog {
    constructor(title, content, btn, list) {
        this.title = title;
        this.content = content;
        this.btn = btn;
        this.list = list;
    }

    blogText() {
        list.innerHTML = list.innerHTML + `
        <div class="dialog-left">
            <h2 >${title.value}</h2 >
            <p>${content.value}</p>
        </div>
      
            `;
        title.value = "";
        content.value = "";
    };
}

var title = document.getElementById("title");
var content = document.getElementById("content");
var btn = document.getElementById("btn");
var list = document.getElementById("list");

var blog = new Blog(title, content, btn, list);
btn.addEventListener("click", blog.blogText)



// var title = document.getElementById("title");
// var content = document.getElementById("content");
// var btn = document.getElementById("btn");
// var list = document.getElementById("list");

// function blogText() {
//     list.innerHTML = list.innerHTML + `
//     <div class="article" >
//         <h2 >${title.value}</h2 >
//         <p>${content.value}</p>
//     </div >
//         `;
//     title.value = "";
//     content.value = "";
// }

// btn.addEventListener("click", blogText);