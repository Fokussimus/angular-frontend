import { Article } from './article';

export class ArticleFactory {
    static empty(): Article {
        return new Article([], '', '', '', '', 'none', 'none');
    }

    static fromObject(rawArticle: any): Article {
        return new Article(
        rawArticle.tags,
        rawArticle._id,
        rawArticle.title,
        rawArticle.summary,
        rawArticle.content,
        rawArticle.author,
        rawArticle.title_img,
        rawArticle.published
        );
    }
}
