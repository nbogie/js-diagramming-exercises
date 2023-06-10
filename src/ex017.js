let a = { name: "ali" }

let b = { name: "bob", next: a }

a.next = b

let c = a.next.next.next

c.name = "charlie"