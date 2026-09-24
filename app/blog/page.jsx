import Link from "next/link";
import "./style.css";

const articles = [

    {
        slug: "how-to-be-exam-smart-heart-mind-and-eye",

        category: "Exam Strategies",

        title: "How to Be Exam Smart: Heart, Mind and Eye",

        description:
            "Learn how the Heart, Mind and Eye framework helps students understand questions, think step by step and present answers clearly.",

        image: "/images/heartmindeye.png",

        date: "30 August 2026",
    },

    {
        slug: "how-to-improve-psle-mathematics-problem-solving",

        category: "PSLE Mathematics",

        title:
            "How to Improve PSLE Mathematics Problem Solving: 10 Practical Strategies",

        description:
            "Discover practical strategies to strengthen mathematical reasoning, improve confidence and develop problem-solving skills for the PSLE Mathematics examination.",

        image:
            "/images/pslemath.jpg",

        date:
            "10 August 2026",
    },

    {
        slug:
            "how-to-master-psle-science-answering-techniques",

        category:
            "PSLE Science",

        title:
            "How to Master PSLE Science Answering Techniques: A Parent's Guide",

        description:
            "Learn how students can answer open-ended questions effectively, improve scientific reasoning and perform confidently in the PSLE Science examination.",

        image:
            "/images/pslescience.jpg",

        date:
            "10 August 2026",
    },

    {
        slug:
            "why-every-child-can-benefit-from-mathematics-olympiad",

        category:
            "Mathematics Olympiad",

        title:
            "Why Every Child Can Benefit from Mathematics Olympiad",

        description:
            "Discover how Mathematics Olympiad develops logical thinking, creativity, resilience and confidence in students of every ability—not just high achievers.",

        image:
            "/images/matholympiad.jpg",

        date:
            "10 August 2026",
    },

];

export const metadata = {

    title:
        "Educational Insights | Simply Smart Enrichment",

    description:
        "Read educational articles, PSLE study strategies, Mathematics, Science and Olympiad insights from Simply Smart Enrichment.",

};

export default function BlogPage() {

    return (

        <main className="blog-page">

            {/* HERO */}

            <section className="blog-hero">

                <div className="section-container">

                    <p className="blog-small-title">

                        LEARN SMARTER, GROW FURTHER

                    </p>

                    <h1 className="blog-title">

                        Blog Articles


                    </h1>

                    <p className="blog-description">

                        Explore practical study strategies, educational
                        insights and expert guidance designed to help
                        parents support their children’s learning journey
                        with confidence.

                    </p>

                </div>

            </section>


            {/* ARTICLES */}

            <section className="blog-section">

                <div className="section-container">

                    <div className="blog-header">

                        <p className="section-label">

                            LATEST ARTICLES

                        </p>

                        <h2>

                            Insights For Parents & Students

                        </h2>

                    </div>


                    <div className="blog-grid">

                        {articles.map((article) => (

                            <Link

                                key={article.slug}

                                href={`/blog/${article.slug}`}

                                className="article-card"

                            >

                                <div className="article-image">

                                    <img

                                        src={article.image}

                                        alt={article.title}

                                    />

                                </div>


                                <div className="article-content">

                                    <span className="article-category">

                                        {article.category}

                                    </span>

                                    <h3>

                                        {article.title}

                                    </h3>

                                    <p>

                                        {article.description}

                                    </p>


                                    <div className="article-footer">

                                        <span>

                                            {article.date}

                                        </span>

                                        <span>

                                            Read Article →

                                        </span>

                                    </div>

                                </div>

                            </Link>

                        ))}

                    </div>

                </div>

            </section>

        </main>

    );

}
