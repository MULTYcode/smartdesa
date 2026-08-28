# ======================
# 1. Build Stage
# ======================
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependencies file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Build the Next.js app
RUN npm run build

# ============================
# 2. Production Stage
# ============================
FROM node:22-alpine AS runner

WORKDIR /app

# Set environment variable
ENV NODE_ENV=production

# Copy package*.json and .env (if present) from builder
COPY --from=builder /app/package*.json /app/.env* ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./next.config.ts

# Copy the entrypoint script for runtime env injection
COPY --from=builder /app/docker-entrypoint.sh /app/docker-entrypoint.sh
RUN chmod +x /app/docker-entrypoint.sh
RUN chmod -R 777 /app/public

# Expose port
EXPOSE 3000

# Use entrypoint to generate env-config.js before starting the app
ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["npm", "start"]
