# Menggunakan image base yang sesuai dengan kebutuhan Anda
FROM node:14-alpine

RUN apk update && apk add git

RUN apk add --no-cache nginx

# Mengatur direktori kerja dalam kontainer
WORKDIR /app

# Menyalin package.json dan package-lock.json (atau yarn.lock)
COPY package*.json ./

# Menginstal dependensi aplikasi
RUN npm install

# Menyalin sumber kode aplikasi
COPY . .

# Menyalin folder dist
COPY dist/ ./dist/

# Membangun aplikasi
RUN npm run build

# Menginstal http-server sebagai dependensi global
RUN npm install -g http-server

# Mengatur port yang akan digunakan
ENV PORT=443
EXPOSE 443

# Mengatur perintah yang akan dijalankan ketika kontainer berjalan
CMD ["http-server", "dist", "-S", "-C", "/etc/nginx/ssl/fullchain.pem", "-K", "/etc/nginx/ssl/privkey.pem"]