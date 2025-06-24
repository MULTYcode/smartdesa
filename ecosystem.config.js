module.exports = {
  apps : [{
    name: "smartdesa-template-2",
    script: "npm run start",
    args: "start",
    cwd: "/smartdesa",
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: "production",
      PORT: 3000
    }
  }]
};