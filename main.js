let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];

let checkUsers = users.filter((item) =>{
    return item.id == 2
})

console.log(checkUsers);

let checkUsers2 = users.filter((item) =>{
    return item.id > 1
})

console.log(checkUsers2);