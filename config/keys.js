// module.exports = {
//     googleClientID: '345760113094-bcfkubmeq6b5b9co4j17i9qjp8h64p3p.apps.googleusercontent.com',
//     googleClientSecret: 'IDKypUGuuL4rL7ga2wkRmZjm',
//     mongoURI: 'mongodb+srv://root:root@emaily.v1yam.mongodb.net/emaily?retryWrites=true&w=majority',
//     cookieKey: 'redacted'
// }

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}