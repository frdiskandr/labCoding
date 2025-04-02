package route

import (
	"github.com/gofiber/fiber/v2"
)

func oprand() int {
	result := 1000 * 993293 * 323
	return result
}

func UserRoute(app *fiber.App) {
	r := app.Group("/user")

	r.Get("/", func(c *fiber.Ctx) error {
		result := make(chan int)
		go func() {
			result <- oprand()
		}()

		return c.Status(fiber.StatusOK).JSON(fiber.Map{"data": <- result})
	})
}
