
import { createClient, MicroCMSQueries, MicroCMSListContent, MicroCMSImage } from "microcms-js-sdk";

export type Category = {
    name: string;
} & MicroCMSListContent;

export type Blog = {
    title: string;
    image?: MicroCMSImage;
    textBody: string;
    category: Category;
} & MicroCMSListContent;

export type Portfolio = {
    image: MicroCMSImage,
    title: string,
    description: string,
    projecturlfrontend: string,
    githuburlfrontend: string,
    githuburlbackend?: string,
    githuburl: string,
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error('process.env.MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_APIKEY) {
    throw new Error('process.env.MICROCMS_APIKEY is required');
}

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_APIKEY,
});

export const getPortfolioList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Portfolio>({
        endpoint: 'portfolio',
        queries,
    });
    return listData;
};

export const getPortfolioDetail = async (contentId: string, queries?: MicroCMSQueries) => {
    const listDetail = await client.getListDetail<Portfolio>({
        endpoint: 'portfolio',
        contentId,
        queries,
    });
    return listDetail;
};

export const getBlogList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Blog>({
        endpoint: 'blog',
        queries,
    });
    return listData;
};

export const getBlogDetail = async (contentId: string, queries?: MicroCMSQueries) => {
    const listDetail = await client.getListDetail<Blog>({
        endpoint: 'blog',
        contentId,
        queries,
    });
    return listDetail;
};

export const getCategoryDetail = async (contentId: string, queries?: MicroCMSQueries) => {
    const listDetail = await client.getListDetail<Category>({
        endpoint: 'categories',
        contentId,
        queries,
    });
    return listDetail;
};