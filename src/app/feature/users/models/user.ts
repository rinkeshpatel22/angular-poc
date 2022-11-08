export interface User {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number
    eyeColor: string,
    company: Company
    address: Address
}

interface Company {
    name: string,
    title: string
}

interface Address {
    address: string,
    city: string,
    postalCode: string,
    state: string
}

export interface UserResponse {
    users: User[],
    total: number,
    skip: number,
    limit: number
}