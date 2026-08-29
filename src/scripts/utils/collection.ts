import { getCollection } from 'astro:content';
import { ProjectType } from "../../content.config";
import { Accent } from "../types";
import { SERIES } from "../../series.config";

export async function loadAndFormatCollection(name: any, withDate = true) {
	const collection = await getCollection(name)

    collection.forEach((item: any) => {
        if (withDate) {
            const date = new Date(item.data.pubDate)
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const monthZerofilled = (month < 10 ? '0' : '') + month

            item.relativeURL = `${year}/${monthZerofilled}/${item.id}/`
        } else {
            item.relativeURL = `${item.id}/`
        }

        item.absoluteURL = `/${name}/${item.relativeURL}`
    })

    return collection
};

export async function getTags(collection: any[]) {
    const tags = collection.map(item => item.data.tags).flat()
    return Array.from(new Set(tags)).sort()
}

export function seriesOrder(slugA: string, slugB: string) {
    const indexA = Object.keys(SERIES).indexOf(slugA);
    const indexB = Object.keys(SERIES).indexOf(slugB);

    return indexA - indexB;
}

export async function getSeries(collection: any[]) {
    const series = collection
        .map(item => item.data.series)
        .filter((value: any) => value !== undefined)
    return Array.from(new Set(series)).sort(seriesOrder)
}

export async function getSeriesItems(collection: any[]) {
    const series = await getSeries(collection);

    return series.map((slug: string) => {
        const meta = SERIES[slug];

        return {
            slug,
            postCount: collection.filter((item: any) => item.data.series === slug).length,
            absoluteURL: `/posts/series/${slug}/1/`,
            data: {
                title: meta?.title,
                description: meta?.description,
            },
        };
    });
}

export function projectTypeToAccent(type: string) {
    switch (type) {
        case ProjectType.Game:
            return Accent.One
        case ProjectType.Tool:
            return Accent.Two
        case ProjectType.Package:
            return Accent.Three
        case ProjectType.Website:
            return Accent.Four
        default:
            return Accent.One
    }
}
