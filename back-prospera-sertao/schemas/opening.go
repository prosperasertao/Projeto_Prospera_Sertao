package schemas

import (
	"time"

	"gorm.io/gorm"
)

type Opening struct {
	gorm.Model
	Nome     	string
	Email  	 	string
	Senha 		string

}

type OpeningResponse struct {
	ID        	uint      `json:"id"`
	CreatedAt 	time.Time `json:"createdAt"`
	UpdatedAt 	time.Time `json:"updatedAt"`
	DeletedAt 	time.Time `json:"deteledAt,omitempty"`
	Nome     	string    `json:"nome"`
	Email   	string    `json:"email"`
	Senha  		string    `json:"senha"`
}
