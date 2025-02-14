type person = {
    name: String,
    age: number
}
 type dataa = {
    address: String,
    id: Number,
    dll :[]
 }

interface data<t> {
    person: t,
    data:dataa
}

const request: data<person> ={
    person:{
        name: "dudung jr",
        age: 20
    },
    data: {
        address: "dudung",  
        id: 1,
        dll: []
    }
}

console.log(request);