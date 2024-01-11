package handler

import (
	"github.com/prosperasertao/Projeto_Prospera_Sertao/tree/main/back-prospera-sertao/config"
	"gorm.io/gorm"
)

var (
	logger *config.Logger
	db     *gorm.DB
)

func InitializeHandler() {
	logger = config.GetLogger("handler")
	db = config.GetSQLite()
}
