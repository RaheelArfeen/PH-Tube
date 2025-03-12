function loadCategories() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
}

function displayCategories(categories){
    const categoryContainer = document.getElementById('category-container')

    for(let cat of categories){
        const categoryBtn = document.createElement('div')
        categoryBtn.innerHTML = `<button class="btn btn-sm bg-[#25252520] hover:bg-[#ff1f3d] hover:text-white">${cat.category}</button>`
        categoryContainer.append(categoryBtn)
    }
}

loadCategories()

function loadVideos() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideos(data.videos)) 
}

const displayVideos = (videos) =>{
    const videoContainer = document.getElementById('video-container')

    videos.forEach(video => {

        const videoCard = document.createElement('div')
        videoCard.innerHTML = `
            <div class="card bg-base-100">
                <figure class="relative">
                    <img class="rounded-lg w-full h-[240px] object-cover" src="${video.thumbnail}" alt="Shoes" />
                    <span class="absolute bottom-2 right-2 text-xs text-white bg-[#171717] rounded-md py-1 px-1.5">3hrs 56 min ago</span>
                </figure>
                <div class="card py-4 pr-2 flex">
                    <div class="flex gap-4">
                        <div class="profile">
                            <div class="avatar">
                                <div class="w-12 rounded-full">
                                  <img src="${video.authors[0].profile_picture}" />
                                </div>
                            </div>
                        </div>
                        <div class="intro">
                            <div>
                                <h2 class="font-semibold text-xl">Midnight Serenade</h2>
                                <p class="text-sm font-light flex items-center gap-2 text-gray-400">Awlad Hossain <img class="w-5" src="https://img.icons8.com/?size=100&id=QMxOVe0B9VzG&format=png&color=000000" alt=""></p>
                                <span class="text-sm font-light text-gray-400">91K views</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        videoContainer.append(videoCard)
    });
}

loadVideos()