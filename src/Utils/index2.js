export const getsavenext =()=>{
    const watchletter = localStorage.getItem('watchletter')
    if(watchletter) return JSON.parse(watchletter);
    return [];
}


export const addsavenext = (movie)=>{
    const watchletter = getsavenext()
    const isExit = watchletter.find(save=>save.id == movie.id)
    if(isExit) return
    watchletter.push(movie)
    console.log(movie)
    localStorage.setItem('watchletter',JSON.stringify(watchletter))

}

export const removesave =(id)=>{
    const watchletter = getsavenext()
    const remaninewatch = watchletter.filter(watch => watch.id != id)
    localStorage.setItem('watchletter',JSON.stringify(remaninewatch))
}