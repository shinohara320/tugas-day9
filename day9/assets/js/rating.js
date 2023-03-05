const testimoniData = [
    {
        author : "John Doe",
        quote : "mantepp",
        image : "https://cdn.antaranews.com/cache/800x533/2022/09/23/20220923_002847.jpg",
        rating : 4
    },
    {
        author : "Bu Mulyani",
        quote : "jangan dipanggil ibu",
        image : "https://cdn0-production-images-kly.akamaized.net/q4IlhekRLuHbFld8MHtCTNxKV-Y=/0x153:7952x4635/1200x675/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3528176/original/060005900_1627885992-shutterstock_1935250655.jpg",
        rating : 1
    },
    {
        author : "Bang Mikkelsen",
        quote : "manteppp(pnya 3)",
        image : "https://flxt.tmsimg.com/assets/85363_v9_bc.jpg",
        rating : 5
    },
    {
        author : "A Kang kung",
        quote : "euyy",
        image : "https://flxt.tmsimg.com/assets/85363_v9_bc.jpg",
        rating : 3
    },
]

function allTestimonials(){
    let testimonialHTML = "";

    testimoniData.forEach((item) =>{
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
allTestimonials();

function filterTestimonial(rating){
    let testimonialHTML = "";

    const testimonialFiltered = testimoniData.filter((item) => {
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