package app

import (
	"goApi/controller"
	"goApi/middleware"

	"github.com/gin-gonic/gin"
)

func Web(port string) {
	r := gin.Default()

	r.GET("/", controller.GetReq)
	r.POST("/", middleware.UserValidateMiddleware() ,controller.PostReq)

	r.Run(":" + port)
}
