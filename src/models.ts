export interface IUser {
    map(arg0: (user: any) => JSX.Element): import("react").ReactNode
    length: any
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}