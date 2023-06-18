# Menggunakan image base yang sesuai dengan kebutuhan Anda
FROM node:14-alpine

# Mengatur direktori kerja dalam kontainer
WORKDIR /app

# Menyalin package.json dan package-lock.json (atau yarn.lock)
COPY package*.json ./

# Menginstal dependensi aplikasi
RUN npm install

# Menyalin sumber kode aplikasi
COPY . .

# Membangun aplikasi
RUN npm run build

# Mengatur perintah yang akan dijalankan ketika kontainer berjalan
CMD ["npm", "serve"]