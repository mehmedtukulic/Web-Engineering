let baseUrl;
if (!process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:3001'
} else {
    baseUrl = 'http://shisha-time.herokuapp.com/'
}

module.exports = {
    BASE_URL: baseUrl
}