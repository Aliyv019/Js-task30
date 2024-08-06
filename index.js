const input = document.querySelector("input")
const search_btn=document.querySelector('button')
const list=document.querySelector('ul')
list.innerHTML=""

const search_result=document.querySelector('.search_result')


search_btn.addEventListener('click',()=>{if(input.value.trim()!=""){searchclick()}})
    input.addEventListener('keydown',event=>{
        if(event.key=="Enter" && input.value.trim()!=""){searchclick()}
    })

async function searchclick(){
    list.innerHTML=""
    const search=input.value
    try {
        const response=await fetch(`https://www.omdbapi.com/?apikey=7704dd86&s=${search}&page=1`)
        const data=await response.json()
        for(let i=0;i<5;i++){
            try {
                const response2=await fetch(`https://www.omdbapi.com/?apikey=7704dd86&i=${data.Search[i].imdbID}&plot=full`)
                const data2=await response2.json()
                const ListItem=document.createElement('li')
                ListItem.innerHTML=`
                        <div class="movie_front movie">
                        <img src="${data2.Poster}">
                        <h2>${data2.Title}(${data2.Year})</h2>
                        <p>IMDB Rating:${data2.imdbRating}</p>
                        <p>Release Date:${data2.Released}</p>
                        <p>${data2.Plot}</p>
                        </div>
                        <div class="movie_back movie">
                        <h2>${data2.Title}(${data2.Year})</h2>
                        <p>${data2.Plot}</p>
                        </div>`
                list.appendChild(ListItem)
                console.log(data2);
            } catch (error) {
                console.error();
            }
        }
    } catch (error) {
        console.error();
    }
}

const top10list=document.querySelector('.top10 ul')

async function topten(){
    try {
        const response =await fetch(`http://www.omdbapi.com/?apikey=7704dd86&t=Deadpool & Wolverine`)
        const data =await response.json()
        const ListItem=document.createElement('li')
        ListItem.innerHTML=`
                    <img src="${data.Poster}" alt="">
                    <h2>${data.Title}(${data.Year})</h2>
                    <p>${data.Plot}</p>
        `
        top10list.appendChild(ListItem)
    } catch (error) {
        console.error();
        
    }
    try {
        const response =await fetch(`http://www.omdbapi.com/?apikey=7704dd86&t=House of the Dragon`)
        const data =await response.json()
        const ListItem=document.createElement('li')
        ListItem.innerHTML=`
                    <img src="${data.Poster}" alt="">
                    <h2>${data.Title}(${data.Year})</h2>
                    <p>${data.Plot}</p>
        `
        top10list.appendChild(ListItem)
    } catch (error) {
        console.error();
        
    }

    try {
        const response =await fetch(`http://www.omdbapi.com/?apikey=7704dd86&t=Twisters`)
        const data =await response.json()
        const ListItem=document.createElement('li')
        ListItem.innerHTML=`
                    <img src="${data.Poster}" alt="">
                    <h2>${data.Title}(${data.Year})</h2>
                    <p>${data.Plot}</p>
        `
        top10list.appendChild(ListItem)
    } catch (error) {
        console.error();
        
    }

    try {
        const response =await fetch(`http://www.omdbapi.com/?apikey=7704dd86&t= The Boys`)
        const data =await response.json()
        const ListItem=document.createElement('li')
        ListItem.innerHTML=`
                    <img src="${data.Poster}" alt="">
                    <h2>${data.Title}(${data.Year})</h2>
                    <p>${data.Plot}</p>
        `
        top10list.appendChild(ListItem)
    } catch (error) {
        console.error();
        
    }

    try {
        const response =await fetch(`http://www.omdbapi.com/?apikey=7704dd86&t= Longlegs`)
        const data =await response.json()
        const ListItem=document.createElement('li')
        ListItem.innerHTML=`
                    <img src="${data.Poster}" alt="">
                    <h2>${data.Title}(${data.Year})</h2>
                    <p>${data.Plot}</p>
        `
        top10list.appendChild(ListItem)
    } catch (error) {
        console.error();
        
    }

    try {
        const response =await fetch(`http://www.omdbapi.com/?apikey=7704dd86&t= Presumed Innocent`)
        const data =await response.json()
        const ListItem=document.createElement('li')
        ListItem.innerHTML=`
                    <img src="${data.Poster}" alt="">
                    <h2>${data.Title}(${data.Year})</h2>
                    <p>${data.Plot}</p>
        `
        top10list.appendChild(ListItem)
    } catch (error) {
        console.error();
        
    }

    try {
        const response =await fetch(`http://www.omdbapi.com/?apikey=7704dd86&t= Avengers`)
        const data =await response.json()
        const ListItem=document.createElement('li')
        ListItem.innerHTML=`
                    <img src="${data.Poster}" alt="">
                    <h2>${data.Title}(${data.Year})</h2>
                    <p>${data.Plot}</p>
        `
        top10list.appendChild(ListItem)
    } catch (error) {
        console.error();
        
    }

    try {
        const response =await fetch(`http://www.omdbapi.com/?apikey=7704dd86&t= The Bear`)
        const data =await response.json()
        const ListItem=document.createElement('li')
        ListItem.innerHTML=`
                    <img src="${data.Poster}" alt="">
                    <h2>${data.Title}(${data.Year})</h2>
                    <p>${data.Plot}</p>
        `
        top10list.appendChild(ListItem)
    } catch (error) {
        console.error();
        
    }

    try {
        const response =await fetch(`http://www.omdbapi.com/?apikey=7704dd86&t= Cobra Kai`)
        const data =await response.json()
        const ListItem=document.createElement('li')
        ListItem.innerHTML=`
                    <img src="${data.Poster}" alt="">
                    <h2>${data.Title}(${data.Year})</h2>
                    <p>${data.Plot}</p>
        `
        top10list.appendChild(ListItem)
    } catch (error) {
        console.error();
        
    }


    try {
        const response =await fetch(`http://www.omdbapi.com/?apikey=7704dd86&t=Game of Thrones`)
        const data =await response.json()
        const ListItem=document.createElement('li')
        ListItem.innerHTML=`
                    <img src="${data.Poster}" alt="">
                    <h2>${data.Title}(${data.Year})</h2>
                    <p>${data.Plot}</p>
        `
        top10list.appendChild(ListItem)
    } catch (error) {
        console.error();
        
    }

}
document.addEventListener('DOMContentLoaded',topten)