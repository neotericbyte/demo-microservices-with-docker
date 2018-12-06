module.exports = {
    redis: {
        host: process.env['REDIS_HOST'] || 'redis',
        port: process.env['REDIS_PORT'] || '6379',
    }
}