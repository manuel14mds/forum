type PathObject = {
    name: string,
    path: string
}
export type PathList = PathObject[] | []

export type Post = {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}
export type Publications = Post[]
