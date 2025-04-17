# Gunakan image Node.js sebagai base
FROM node:18-alpine

# Set working directory dalam container
WORKDIR /app

# Copy file package.json dan package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy semua file ke dalam container
COPY . .

# Ekspos port yang digunakan oleh React (default: 3000)
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["npm", "start"]
