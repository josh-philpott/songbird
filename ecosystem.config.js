/**
 * PM2 Ecosystem Configuration File
 *
 * To run in PM2, run
 * `pm2 start ecosystem.config.js` from the root project directory
 */
module.exports = {
  apps: [
    {
      name: 'api',
      cwd: './api',
      script: 'npm',
      args: 'start'
    },
    {
      name: 'app',
      script: 'npm',
      args: 'start',
      cwd: './app'
    }
  ]
}
