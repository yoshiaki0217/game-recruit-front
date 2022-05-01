FROM node:16.13.1
# WORKDIR /usr/src/app/

# RUN npm install

ENV HOME=/app \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    HOST=0.0.0.0 \
    API_URL=${API_URL}

WORKDIR ${HOME}

# 追加
COPY package*.json ./
RUN npm install

COPY . ./

RUN npm run build