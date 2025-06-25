// data/users.ts

type User = {
    email: string;
    password: string;
    firstName: string;
    city: string;
    address: string;
    phone: string;
};

const users: User[] = [
    {
        email: "test@example.com",
        password: "password123",
        firstName: "Jean",
        city: "Paris",
        address: "123 Rue Exemple",
        phone: "0601020304",
    },
];

export function addUser(user: User) {
    users.push(user);
}

export function findUserByEmail(email: string) {
    return users.find((u) => u.email === email);
}
