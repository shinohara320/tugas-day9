const testimonialPromise = new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest
    xhr.open('GET', 'https://api.npoint.io/56e06f754f222d4a5adf', true)
    xhr.onload = function(){
        if(xhr.status===200){
          resolve(JSON.parse(xhr.response))  
        }else{
            reject('Error loading data!')
        }
    }
    xhr.onerror = function(){
        reject('Network Error!')
    }
    xhr.send()
})
async function getAllTestimonialData(){
    const response = await testimonialPromise
    console.log(response)

    let testimonialHTML = ''
    response.forEach((item) =>{
        testimonialHTML += `<div class="testimonial">
        <img src="${item.image}" class="profile-testimonial" />
        <p class="quote">"${item.quote}"</p>
        <p class="author"> ${item.author}</p>
        <p class="rating"> 
        ${item.rating}
        <i class="fa-solid fa-star"></i></p>
    </div>`

    })
    document.getElementById('testimonials').innerHTML = testimonialHTML;
}
getAllTestimonialData()

async function getFilteredTestimonials(rating){
    const responseFilter = await testimonialPromise

    let testimonialHTML = "";

    const testimonialFiltered = responseFilter.filter((item) => {
       return item.rating === rating;
    });

    if(testimonialFiltered.length === 0){
        testimonialHTML += `<div class="testimonial">
        <p class="quote">"Tidak ada testimonial"</p>
    </div>`
    }else {
        testimonialFiltered.forEach((item) =>{
            testimonialHTML += `<div class="testimonial">
            <img src="${item.image}" class="profile-testimonial" />
            <p class="quote">"${item.quote}"</p>
            <p class="author"> ${item.author}</p>
            <p class="rating"> 
            ${item.rating}
            <i class="fa-solid fa-star"></i></p>
        </div>`
    })
    }
    document.getElementById('testimonials').innerHTML = testimonialHTML;
}