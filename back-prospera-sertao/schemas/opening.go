package schemas

import ("gorm.io/gorm")

type Opening struct {
	gorm.Model
	Role string `json:"role"`
	Company string `json:"company"`
	Remote bool `json:"remote"`
	Link string `json:"link"`
	Salary float64 `json:"salary"`
}