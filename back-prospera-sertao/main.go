package main

import (
	"prospera_sertao_api/config"
	"prospera_sertao_api/router"
)

var(
	logger config.Logger
)

func main() {
	logger = *config.GetLogger("main")
	// Initialize configs
	err := config.Init()
	if err != nil {
		logger.Errorf("Error initializing configs: %v", err)
		return
	}

	// Initialize the router
	router.Initialize()
}
