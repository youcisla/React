# Makefile for React + JSON Server Project

install:
	@echo "Installing dependencies..."
	npm install
	npm install react-router-dom@6 axios bootstrap
	npm install -g json-server
	@echo "✅ All dependencies installed."

start:
	@echo "Starting React App..."
	npm start

json-server:
	@echo "Starting JSON Server at port 3001..."
	json-server -p 3001 db.json

dev:
	npx concurrently "json-server -p 3001 db.json" "npm start"
