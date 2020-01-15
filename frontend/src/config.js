let baseUrl;
if (!process.env.HEROKU) {
    baseUrl = 'http://localhost:3001'
} else {
    baseUrl = 'http://shisha-time.herokuapp.com/'
}

module.exports = {
    BASE_URL: baseUrl
}