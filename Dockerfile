FROM node:14.15.0
# WORKDIR /usr/src/app/

# RUN npm install

ENV HOME=/${WORKDIR} \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    HOST=0.0.0.0 \
    API_URL=${API_URL}

WORKDIR ${HOME}

# 追加
COPY package*.json ./
RUN npm install --no-optional

COPY . ./

RUN npm run build