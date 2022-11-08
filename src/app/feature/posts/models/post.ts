export interface Post {
    id: number,
    title: string,
    body: string,
    userId: string,
    tags: string[],
    reactions: number,
    firstName?: string,
    lastName?: string,
    image?: string
}

export interface PostResponse {
    posts: Post[],
    total: number,
    skip: number,
    limit: number
}
