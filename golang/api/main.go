package main

import (
	"api/middleware"
	"api/route"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New(fiber.Config{
		ReduceMemoryUsage: true,
	})
	app.Use(cors.New())
	app.Use(middleware.Auth)

	app.Get("/", func(c *fiber.Ctx) error {
		param := c.Query("status")
		if param == "error" {
			c.Locals("error", "terjadi error")
			return c.Next()
		} else if param == "success" {
			return c.Next()
		}
		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"data": "hello world!!!",
		})
	})

	app.Static("/static", "./public")
	route.UserRoute(app)

	app.Use(middleware.Output)

	log.Fatal(app.ListenTLS(":3000", "cert.pem", "key.pem"))
}
