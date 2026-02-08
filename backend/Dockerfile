
FROM node:20-bookworm-slim AS base
WORKDIR /app

RUN apt-get update -y \
  && apt-get install -y --no-install-recommends openssl ca-certificates \
  && rm -rf /var/lib/apt/lists/*

FROM base AS deps
COPY package.json package-lock.json ./
COPY backend/package.json backend/package.json

RUN npm ci --workspace backend --ignore-scripts --no-audit --no-fund

# Install pinned Prisma v6 inside image (does not touch lockfile)
RUN npm i -D prisma@6.19.2 --no-save --no-package-lock --ignore-scripts --no-audit --no-fund
RUN npm i @prisma/client@6.19.2 --no-save --no-package-lock --ignore-scripts --no-audit --no-fund

FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY package.json package-lock.json ./
COPY backend ./backend

WORKDIR /app/backend

RUN npx --no-install prisma generate --schema prisma/schema.prisma
RUN npm run build

FROM base AS runner
ENV NODE_ENV=production
WORKDIR /app/backend

COPY --from=deps /app/node_modules /app/node_modules
COPY --from=build /app/backend/package.json ./package.json
COPY --from=build /app/backend/dist ./dist
COPY --from=build /app/backend/prisma ./prisma

EXPOSE 3000

CMD ["sh", "-lc", "npx --no-install prisma db push --schema prisma/schema.prisma && node dist/main.js"]
