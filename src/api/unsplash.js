import axios from 'axios';

export default axios.create({
    baseURL : ' https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID LIgXHVQKH-FEgvoMu-Ryw-P8p8IZ7p78EDMBE0hWtUc'
       }
}
)