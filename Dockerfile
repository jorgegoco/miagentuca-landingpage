# Usa una imagen base de Node.js ligera para la compilación
FROM node:20-alpine AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración y dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente
COPY . .

# Ejecuta el comando de compilación de Vite
RUN npm run build

# --- FASE DE EJECUCIÓN ---
# Usa una imagen base más ligera (Alpine) para servir el contenido
FROM node:20-alpine AS final

# Instala un servidor simple para servir archivos estáticos (el output de 'build')
RUN npm install -g serve

# Copia el contenido compilado (el output de 'build') desde la fase anterior
COPY --from=build /app/dist /usr/share/nginx/html

# La aplicación debe escuchar en el puerto 8080 (requisito de Cloud Run)
ENV PORT 8080
EXPOSE 8080

# Comando para iniciar el servidor de archivos estáticos
CMD ["serve", "-s", "/usr/share/nginx/html", "-l", "8080"]
