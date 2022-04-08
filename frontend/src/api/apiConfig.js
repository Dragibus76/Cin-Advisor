const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '84483b5fbf72908a4d3869434376a6ba',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;