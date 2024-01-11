.PHONY: default run build test docs clean
# Variables
APP_NAME=projetoProsperaSertao

# Tasks
default: run-with-docs

run:
	@go run main.go

build:
	@go build -o $(APP_NAME) main.go
clean:
	@rm -f $(APP_NAME)