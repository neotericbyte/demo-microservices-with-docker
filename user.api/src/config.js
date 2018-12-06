module.exports = {
    redis: {
        host: process.env['REDIS_HOST'] || 'redis',
        port: process.env['REDIS_PORT'] || '6379',
    },
    services: {
        post: {
            host: process.env['API_POST_HOST'] || 'http://localhost/posts',
            port: process.env['API_POST_API_KEY'] || 8080,
        }
    }
}