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

export type CommentType = {
    postId: number;
    id:     number;
    name:   string;
    email:  string;
    body:   string;
}
export type CommentList = CommentType[]

