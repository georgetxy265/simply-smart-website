import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://simplysmart.com";

    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/why-us`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/testimonials`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/register`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blog/how-to-improve-psle-mathematics-problem-solving`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blog/how-to-master-psle-science-answering-techniques`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blog/why-every-child-can-benefit-from-mathematics-olympiad`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blog/how-to-be-exam-smart-heart-mind-and-eye`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/moe-school-partnerships`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/mathematics`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/science`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date(),
        },
    ];
}
