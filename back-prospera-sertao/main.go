package main

import (
	"github.com/prosperasertao/Projeto_Prospera_Sertao/tree/main/back-prospera-sertao/config"
	"github.com/prosperasertao/Projeto_Prospera_Sertao/tree/main/back-prospera-sertao/router"
)

var (
	logger *config.Logger
)

func main() {
	logger = config.GetLogger("main")
	// Initialize Configs
	err := config.Init()
	if err != nil {
		logger.Errorf("config initialization error: %v", err)
		return
	}

	// Initialize Route"
	router.Initialize()
}
