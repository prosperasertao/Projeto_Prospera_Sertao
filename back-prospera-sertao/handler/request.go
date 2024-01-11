package handler

import "fmt"

func errParamIsRequired(name, typ string) error {
	return fmt.Errorf("param: %s (type: %s) is required", name, typ)
}

// CreateOpening

type CreateOpeningRequest struct {
	Nome  string `json:"nome"`
	Email string `json:"email"`
	Senha string `json:"senha"`
}

func (r *CreateOpeningRequest) Validate() error {
	if r.Nome == "" && r.Email == "" && r.Senha == "" {
		return fmt.Errorf("request body is empty or malformed")
	}
	if r.Nome == "" {
		return errParamIsRequired("nome", "string")
	}
	if r.Email == "" {
		return errParamIsRequired("email", "string")
	}
	if r.Senha == "" {
		return errParamIsRequired("senha", "string")
	}
	return nil
}

// UpdateOpening

type UpdateOpeningRequest struct {
	Nome  string `json:"nome"`
	Email string `json:"email"`
	Senha string `json:"senha"`
}

func (r *UpdateOpeningRequest) Validate() error {
	// If any field is provided, validation is truthy
	if r.Nome != "" || r.Email != "" || r.Senha != "" {
		return nil
	}
	// If none of the fields were provided, return falsy
	return fmt.Errorf("at least one valid field must be provided")
}
