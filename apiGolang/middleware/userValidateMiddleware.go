package middleware

import (
	"goApi/controller"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func UserValidateMiddleware() gin.HandlerFunc{
	return func(c *gin.Context) {
		var user controller.User

		if err := c.ShouldBindJSON(&user); err != nil {
			c.JSON(400, gin.H{"error middleware": err.Error()})
			return
		}
		log.Println(user)
		if user.Name == "" {
			c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"from abort": "name is required"})
			return
		}
		c.Next()
	}
}