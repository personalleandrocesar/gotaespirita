module.exports = {
    apps: [
        {
            name: 'gotaespirita.com',
            port: '3000',
            exec_mode: 'fork',
            instances: '1',
            script: './.output/server/index.mjs'
        }
    ]
}
