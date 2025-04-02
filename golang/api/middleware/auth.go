package middleware

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

func Auth(c *fiber.Ctx) error {
	log.Println("masuk middleware auth")
	return c.Next()
}

func Output(c *fiber.Ctx) error {
	err := c.Locals("error")
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": err,
		})
	}
	log.Println("masuk middleware output")
	return c.JSON(fiber.Map{"message": "output success"})
}