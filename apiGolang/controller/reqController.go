package controller

import (
	"log"
	"github.com/gin-gonic/gin"
)

func GetReq(c *gin.Context) {
	data := c.Request.Body
	log.Println(data)
	c.JSON(200, gin.H{
		"message": "success",
		"data":    data,
	})
}
