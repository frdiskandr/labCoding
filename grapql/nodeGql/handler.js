class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

function GetUser() {
    const result = new user("John", 30);
    console.log(result)
    return result;
}

export default { GetUser };
