export class Article {
    constructor(
        public tags: string[],
        public _id: string,
        public title: string,
        public summary: string,
        public content: string,
        public author: string,
        public title_img: string
    ) {}
}
