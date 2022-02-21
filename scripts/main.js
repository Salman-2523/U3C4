async function apiCall(url) {


    //add api call logic here
   
    try {
        let res = await fetch(url)
        let data = await res.json()
        return data
        
    } catch (error) {
        console.log('error hai', error);
    }



}

let details_arr = [];
function appendArticles(articles, main) {

    //add append logic here
    articles.map((el)=>{
        let div = document.createElement('div')

        let img = document.createElement('img')
        img.src = el.urlToImage

        let title = document.createElement('p')
        title.textContent = el.title

        let description = document.createElement('p')
        description.textContent = el.description
        div.append(img,title,description)
        main.append(div)

        div.onclick = () =>{
            console.log(el);
            let detailed_data = {
                img: el.urlToImage,
                title: el.title,
                content: el.content,
                source:el.source.name,
                date: el.publishedAt
            }
            details_arr.push(detailed_data)
            localStorage.setItem('article', JSON.stringify(details_arr))
            window.location.href = 'news.html'
        }
    })

}

export { apiCall, appendArticles }