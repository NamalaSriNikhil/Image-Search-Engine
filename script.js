const searchForm = document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("search-result");
const showmorebtn = document.getElementById("show-more-btn");
const btn = document.getElementById("nik");
const accesskey = "Xqk4PEGVnKMXEJw7rNVZ6OwDhi4Rgm5KBtipcE698Yk";
// Xqk4PEGVnKMXEJw7rNVZ6OwDhi4Rgm5KBtipcE698Yk

let keyword="";
let page=1;

async function searchimage(event) {
    keyword=searchbox.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    const result=data['results'];
    if (page===1){
        searchresult.innerHTML="";
    }
    console.log(page)
    for (let i=0;i<result.length;i++){
      const src=  result[i].urls.small;
      const ele= document.createElement('div');
      const img = document.createElement('img');
      const a = document.createElement('a');
      a.href=result[i].links.html;
      a.target="_blank";
      ele.append(a);
      img.src=src;
      img.height=400;
      a.append(img);
      searchresult.append(ele);
    }
    showmorebtn.style.display="block";    
}

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    page=1;
    searchimage();
})

showmorebtn.addEventListener("click",()=>{
    page++;
    searchimage();
    console.log(page)
})