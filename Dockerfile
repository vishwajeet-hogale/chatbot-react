FROM node:12.18.0-alpine as build
WORKDIR /app
COPY package*.json ./

RUN npm ci
COPY ./app ./
RUN npm run build

FROM python:3.6.9-slim-buster
WORKDIR /app
ENV PYTHONPATH "${PYTHONPATH}:/app"

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY ./ ./


CMD python3 app.py