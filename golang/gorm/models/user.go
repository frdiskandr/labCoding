package models

import (
	"gorm.io/gorm"
)

// ======================= ONE-TO-ONE: User & Profile ========================

type User struct {
	gorm.Model
	Name     string   `json:"name"`
	Email    string   `json:"email" gorm:"unique"`
	Password string   `json:"password"`
	Profile  *Profile `gorm:"foreignKey:UserID"`
}

type Profile struct {
	gorm.Model
	UserID uint   `gorm:"uniqueIndex"` // Setiap user hanya memiliki satu profile
	Bio    string `json:"bio"`
	Phone  string `json:"phone"`
}

// ======================= ONE-TO-MANY: Course & Lessons ========================

type Course struct {
	gorm.Model
	Title   string   `json:"title"`
	Desc    string   `json:"description"`
	Lessons []Lesson `gorm:"foreignKey:CourseID"` // Satu course bisa memiliki banyak lesson
}

type Lesson struct {
	gorm.Model
	CourseID uint   `json:"course_id"`
	Title    string `json:"title"`
	Content  string `json:"content"`
}

// ======================= MANY-TO-MANY: User & Course ========================

// Tabel relasi many-to-many antara User dan Course
type UserCourse struct {
	UserID   uint `gorm:"primaryKey"`
	CourseID uint `gorm:"primaryKey"`
}

