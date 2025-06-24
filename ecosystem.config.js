module.exports = {
  apps : [{
    name: "smartdesa-template-2",
    script: "npm",
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