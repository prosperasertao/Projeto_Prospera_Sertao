package config

import (
	"os"
	"prospera_sertao_api/schemas"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func InitializeSQLite() (*gorm.DB, error) {
	logger := GetLogger("sqlite")
	dbPath := "db/main.db"
	//Check if DB exists
	_, err := os.Stat(dbPath)
	if os.IsNotExist(err) {
		logger.Info("Database not found, creating...")
		err = os.MkdirAll("db", os.ModePerm)
		if err != nil {
			logger.Errorf("Error creating database directory: %v", err)
			return nil, err
		}
		file, err := os.Create(dbPath)
		if err != nil {
			logger.Errorf("Error creating database file: %v", err)
			return nil, err
		}
		file.Close()
	}

	// Create DB and connect
	db, err := gorm.Open(sqlite.Open(dbPath), &gorm.Config{})
	if err != nil {
		logger.Errorf("Error opening database: %v", err)
		return nil, err
	}

	// Migrate the schema
	err = db.AutoMigrate(&schemas.Opening{})
	if err != nil {
		logger.Errorf("Error migrating database: %v", err)
		return nil, err
	}
	return db, nil
}
