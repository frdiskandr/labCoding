print("hello world!")
x = 80
y = x
z = 70

print(x)
print(x != 80)

if (x < 70){
  print("gagal")
}else{
  print("lulus")
}

#ternary opration
print(hasil <- if(z <= 70)"gagal" else "lulus")

# parsing 
number = "10"
number <- as.numeric(number)
print(number)


for (number in 1:20){
  print(number)
}


# array harus diinisialisasi panjangnnya
arr = array(1:10)
print(length(arr))

#vektor 
vektor = c(1,3,"hai","vektor")

# function 
sum <- function(x, y){
  return(x + y)
}

print(sum(12,10))

# M Faried Iskandar
#persamaan luas segitiga
#a = 5
#t = 7
#Luas_segitiga = 1/2 * a * t
#print(Luas_segitiga)

#persamaan kecepatan 
#j = 10 #km
#w = 0.5 #jam
#Kecepatan = j/w
#print(Kecepatan)

datas <- c(1,4,2,11,2,3,1,2,3,4,2,4)
out <- mean(datas)
ls.str()

# tabel
name <- c("dudung","parto","supardi","asep")
age <- c(16,20,19,15)

table <- data.frame(Name=name, Age=age)
print(table)


# diskusi 1
x <- c(-4:2) 
y <- c(4:1)
z <- c(seq(1.00, 2.00, 0.25))
p <- c(rep(10, 3), rep(5, 3))
q <- rep(c(rep(2,2),rep(3,2)),2)

# pertanyaan 2
jurusan_asal <- c(rep(c("Komputer", "Matematika"),12))
daerah <- rep(c("jakarta", "surabaya", "Makasar"),each=2,time=4)
usia <- rep(seq(25,28,1),each=6)

datas <- data.frame(jurusan_asal, daerah, usia)
print(datas)

