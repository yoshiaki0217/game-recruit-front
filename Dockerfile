FROM node:14.15.0
# WORKDIR /usr/src/app/

# RUN npm install

ENV HOME=/usr/src/app/ \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    HOST=0.0.0.0 \
    API_URL=${API_URL}

WORKDIR ${HOME}

# 追加
COPY package*.json ./usr/src/app/
RUN npm install

COPY . ./usr/src/app/

RUN npm run build