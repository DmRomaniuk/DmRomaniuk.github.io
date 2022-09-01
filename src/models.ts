export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
    },
    website: string,
    company: {
        name: string,
        catchPhrase: string
    }
}

export interface IPosts {
    userId: number,
    id: number,
    title: string, 
    body: string,
}