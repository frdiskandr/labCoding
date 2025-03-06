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

type User struct{
	Name string `json:"Name" gorm:"name"`
}

func PostReq(c *gin.Context) {
	user := c.MustGet("User")

	log.Println(user)
	c.JSON(200, gin.H{
		"message": "success",
		"data":  user,
	})
}
