export type Users = {
    id: string,
    name: string,
    avatar: string,
}

export type ProjectCardType = {
    title: string,
    description: string,
    totalHours: number,
    progress: number,
    users: Users[]
}