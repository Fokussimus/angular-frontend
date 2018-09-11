import { Article } from './article';

export class ArticleFactory {
    static empty(): Article {
        return new Article([], '', '', '', '');
    }

    static fromObject(rawArticle: any): Article {
        return new Article(
        rawArticle.tags,
        rawArticle._id,
        rawArticle.title,
        rawArticle.summary,
        rawArticle.conten
        );
    }
}
