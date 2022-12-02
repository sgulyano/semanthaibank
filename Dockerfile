FROM python:3.9-slim

ENV PYTHONUNBUFFERED 1

RUN mkdir /app
WORKDIR /app

RUN apt-get update \
    && apt-get -y install libpq-dev gcc \
    && pip install psycopg2

COPY ./SemanticRole/requirements.txt .

RUN pip install -r requirements.txt

COPY ./SemanticRole/ .