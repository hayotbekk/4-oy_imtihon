let URL = "http://localhost:3000/cards"

fetch(URL).then((response)=> {
    return response.json()
}).then((data) => {
    data.map((item) => {
        const {image, title, kanal_img, name, dateUpload} = item;
        document.querySelector('.cards').innerHTML += `
            <img src=${image}></img>
            <h2> ${title}</h2>
        `
    })
})