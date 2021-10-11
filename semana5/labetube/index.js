var main  = document.querySelectorAll('.main .center')[0];

fetch('https://api.themoviedb.org/3/movie/popular?api_key=5d689f6dfe239ec1694ee4f9e11943b1&language=en-US&page=1')
.then(response=> response.json())
.then(data=>{
    data.results.map((i,j)=>{
        if (j > 21)
            return;
        if (j == 0){
            main.innerHTML+= `
                <div class="banner-principal" style="background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
            `;
        }else{
            if(j==i){
                main.innerHTML+= `

               <h2>Assita o melhor filme</h2>
               <div class="card-movie"><img src="https:image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
            `;
            }else{
                main.innerHTML+= `
                   
                   <div class="card-movie"><img src="https:image.tmdb.org/t/p/w500`+i.poster_path+`" /></div>
                `; 
            }
        }
    })
})
