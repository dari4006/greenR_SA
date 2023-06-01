CREATE DATABASE greenR_SA;
\c greenR_SA





CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
);