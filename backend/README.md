# from repo root run this command

## 1) Copy backend/.env.example to backend/.env then update DATABASE_URL

cp backend/.env.example backend/.env

## 2) In backend/.env, set DATABASE_URL to the docker mongo service (replica set required by Prisma)

## DATABASE_URL=mongodb://mongo:27018/weather-app?replicaSet=rs0

## 3) Start MongoDB + auto-init replica set (mongo-init) + Backend API (build if needed)

docker compose -f backend/docker-compose.yml up -d --build

## NOTE

## - If your Dockerfile does NOT run `prisma db push` on startup, run this once

## docker exec -it codebility-backend npx prisma db push --schema prisma/schema.prisma

## Stop / cleanup (optional, useful if you want a fresh DB)

## docker compose -f backend/docker-compose.yml down -v
