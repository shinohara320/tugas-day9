let datas = [];
function getData(event) {
    event.preventDefault();
    
    let title = document.getElementById('name').value;
    let description = document.getElementById('description').value;
    let image = document.getElementById('input-image').files;
    let start = document.getElementById('input-date-start').value;
    let end = document.getElementById('input-date-end').value;
    let nodejs = document.getElementById("nodejs").checked == true ? `<img id="nodejs" src="./assets/images/icons/nodejs.png" style="width:10%; margin-right: 10px;">`: "";
    let nextjs = document.getElementById("nextjs").checked == true ? `<img id="nextjs" src="./assets/images/icons/nextjs.png"style="width:10%;margin-right: 10px;">` : "";
    let reactjs = document.getElementById("reactjs").checked == true ? `<img id="reactjs" src="./assets/images/icons/reactjs.png"style="width:10%;margin-right: 10px;">` : "";
    let typerscript = document.getElementById("typescript").checked == true ? `<img id="typescript" src="./assets/images/icons/typescript.png" style="width:10%;margin-right: 10px;>"` : "";
    
    image  = URL.createObjectURL(image[0]);
    let data = {
        title,
        description,
        start,
        end,
        image,
        nodejs,
        nextjs,
        reactjs,
        typerscript,
    }
    datas.push(data);
    showData();
  }
  const showData = () => {
    document.getElementById("contents").innerHTML = '';
    for(let i = 0; i < datas.length; i++) {
        document.getElementById("contents").innerHTML += `
        <div class="container">
          <div class="upper">
            <div class="image">
              <img src="${datas[i].image}" alt="">
            </div>
            <h1><a href="project-detail.html">
            ${datas[i].title}
            </a></h1>
            <p>Durasi : ${days(datas[i].start,datas[i].end)} hari</p>
            <p>${descLength(datas[i].description,100)}</p>
          </div>
          <div class="detail">
          </div>
          <div class="icons">
          ${datas[i].nodejs} ${datas[i].nextjs} ${datas[i].reactjs} ${datas[i].typerscript}
          </div>
          <div class="button">
            <button>edit</button>
            <button>delete</button>
          </div>
        </div>`          
    }
}
const descLength = (desc, num) => {
  if (desc.length > num) {
    return desc.slice(0, num) + '...'
  } else{
  return desc;
  }
}
function days(dateOne,dateTwo){

  const dateStart = new Date(dateOne);
  const dateEnd = new Date(dateTwo);
  const diffTime = Math.abs(dateEnd - dateStart);
  const diffDays = Math.ceil((diffTime +86400000)/ (1000 * 60 * 60 * 24));
  return diffDays;
}