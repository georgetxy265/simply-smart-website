import Link from "next/link";
import "./style.css";

export const metadata = {
    title: "Math Tuition Singapore | Simply Smart Enrichment",
    description:
        "Primary Math, Secondary and O-Level Math tuition, Junior College Mathematics and Olympiad programmes in Singapore.",
};

const coreAreas = [
    {
        number: "01",
        title: "Numbers & Algebra",
        description: "From fractions and ratios to equations, functions and calculus.",
        visual: (
            <div className="math-area-equation" aria-hidden="true">
                <span>x²</span>
                <span>+</span>
                <span>5x</span>
                <span>+</span>
                <span>6</span>
            </div>
        ),
    },
    {
        number: "02",
        title: "Geometry & Trigonometry",
        description: "Visual reasoning with shapes, measurement, angles and trigonometry.",
        visual: (
            <svg className="math-area-svg" viewBox="0 0 180 100" aria-hidden="true">
                <path d="M28 78 L88 18 L151 78 Z" />
                <path className="math-svg-soft" d="M38 78 A18 18 0 0 1 49 63" />
                <path className="math-svg-soft" d="M88 18 L88 78" />
                <text x="93" y="55">h</text>
                <text x="85" y="94">b</text>
            </svg>
        ),
    },
    {
        number: "03",
        title: "Graphs & Data",
        description: "Coordinates, functions, statistics, vectors and clear data interpretation.",
        visual: (
            <svg className="math-area-svg" viewBox="0 0 180 100" aria-hidden="true">
                <path className="math-svg-soft" d="M18 82 H164 M36 92 V10" />
                <path d="M36 75 C62 70 73 25 105 40 C127 50 137 17 160 16" />
                <circle cx="105" cy="40" r="4" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Problem Solving",
        description: "Heuristics, logical reasoning and non-routine Olympiad strategies.",
        visual: (
            <div className="math-pattern" aria-hidden="true">
                <span>2</span><i>→</i><span>6</span><i>→</i><span>12</span><i>→</i><span>20</span>
            </div>
        ),
    },
];

const helpSteps = [
    ["01", "Understand the Method", "See why a method works before committing it to memory."],
    ["02", "Practise Systematically", "Build accuracy through focused questions by topic and difficulty."],
    ["03", "Apply With Confidence", "Select efficient strategies and communicate working clearly in exams."],
];

const levels = [
    {
        label: "Primary",
        title: "Primary Mathematics",
        copy: "Foundations, heuristics and PSLE Mathematics preparation.",
        topics: ["P1–P6", "PSLE", "Problem Solving"],
    },
    {
        label: "Secondary",
        title: "E-Math & A-Math",
        copy: "Concept mastery and O-Level Math tuition for Secondary students.",
        topics: ["E-Math", "A-Math", "O-Level"],
    },
    {
        label: "Junior College",
        title: "H1 & H2 Mathematics",
        copy: "Calculus, vectors, statistics and A-Level examination readiness.",
        topics: ["H1", "H2", "A-Level"],
    },
    {
        label: "Challenge",
        title: "Mathematics Olympiad",
        copy: "Advanced reasoning and competition-level non-routine questions.",
        topics: ["Reasoning", "Strategy", "SMO Competitions"],
    },
];

export default function Mathematics() {
    return (
        <main className="math-page">
            <section className="math-hero">
                <div className="section-container math-hero-grid">
                    <div className="math-hero-copy">
                        <p className="math-eyebrow math-eyebrow-statement">BUILD STRONG FOUNDATIONS. SOLVE WITH CONFIDENCE.</p>
                        <h1><span>Mathematics</span><br />Programmes</h1>
                        <p className="math-hero-intro">
                            Clear methods, systematic practice and exam-focused guidance for
                            Primary Math, Secondary, and JC Math tuition in Singapore.
                        </p>
                    </div>

                    <div className="math-hero-visual" aria-hidden="true">
                        <svg viewBox="0 0 520 420" className="math-hero-graph">
                            <defs>
                                <pattern id="mathHeroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M40 0H0V40" />
                                </pattern>
                            </defs>
                            <rect width="520" height="420" fill="url(#mathHeroGrid)" />
                            <path className="math-axis" d="M112 382 V35 M105 47 L112 35 L119 47 M38 330 H486 M474 323 L486 330 L474 337" />
                            <text className="math-axis-label math-axis-label-y" x="60" y="185" transform="rotate(-90 60 185)">Grades</text>
                            <text className="math-axis-label math-axis-label-x" x="294" y="370">Time with Simply Smart</text>
                            <path className="math-curve" d="M112 326 C165 320 195 286 232 226 C275 162 323 96 470 76" />
                            <circle className="math-point math-point-a" cx="232" cy="226" r="7" />
                            <circle className="math-point math-point-b" cx="334" cy="128" r="7" />
                        </svg>
                        <div className="math-visual-caption">Consistent learning builds stronger results over time.</div>
                    </div>
                </div>
            </section>

            <section className="math-core">
                <div className="section-container">
                    <div className="math-section-heading">
                        <p className="math-eyebrow math-eyebrow-statement">MATHEMATICS YOU CAN SEE, UNDERSTAND AND APPLY.</p>
                        <h2>Core Areas</h2>
                        <p>Essential ideas across school Mathematics, organised into four connected areas.</p>
                    </div>
                    <div className="math-core-grid">
                        {coreAreas.map((area) => (
                            <article className="math-area-card" key={area.title}>
                                <div className="math-area-top"><span>{area.number}</span>{area.visual}</div>
                                <h3>{area.title}</h3>
                                <p>{area.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="math-help">
                <div className="section-container math-help-grid">
                    <div className="math-help-intro">
                        <p className="math-eyebrow math-eyebrow-statement">FROM FIRST STEP TO FINAL ANSWER.</p>
                        <h2>How We Help</h2>
                    </div>
                    <div className="math-help-list">
                        {helpSteps.map(([number, title, copy]) => (
                            <article key={number}>
                                <span>{number}</span>
                                <div><h3>{title}</h3><p>{copy}</p></div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="math-feature">
                <div className="section-container math-feature-grid">
                    <div className="math-feature-copy">
                        <p className="math-eyebrow math-eyebrow-statement">A GRAPH IS AN EQUATION MADE VISIBLE.</p>
                        <h2>Make the Connection</h2>
                        <p>
                            Students connect algebraic rules with coordinates and shape—not as
                            separate facts, but as different ways to describe the same relationship.
                        </p>
                        <div className="math-function"><span>y</span> = <strong>x²</strong></div>
                    </div>
                    <div className="math-coordinate-card" aria-label="Coordinate graph showing the curve y equals x squared">
                        <svg viewBox="0 0 620 420" role="img">
                            <title>Graph of y equals x squared</title>
                            <defs>
                                <pattern id="mathFeatureGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M40 0H0V40" />
                                </pattern>
                            </defs>
                            <rect width="620" height="420" fill="url(#mathFeatureGrid)" />
                            <g className="math-feature-axes">
                                <path d="M34 342 H586" /><path d="M310 390 V28" />
                                <path d="M579 335 L590 342 L579 349" /><path d="M303 38 L310 25 L317 38" />
                            </g>
                            <path className="math-parabola" d="M86 65 C190 264 239 324 310 342 C381 324 430 264 534 65" />
                            <g className="math-feature-points">
                                <circle cx="190" cy="264" r="7" /><circle cx="310" cy="342" r="7" /><circle cx="430" cy="264" r="7" />
                            </g>
                            <g className="math-axis-labels"><text x="565" y="330">x</text><text x="325" y="45">y</text><text x="325" y="367">0</text></g>
                        </svg>
                    </div>
                </div>
            </section>

            <section className="math-levels">
                <div className="section-container">
                    <div className="math-section-heading math-levels-heading">
                        <p className="math-eyebrow math-eyebrow-statement">SUPPORT FOR EVERY STAGE.</p>
                        <h2>Programme Levels</h2>
                        <p>From strong foundations to advanced mathematical thinking.</p>
                    </div>
                    <div className="math-level-grid">
                        {levels.map((level) => (
                            <article className="math-level-card" key={level.title}>
                                <span className="math-level-label">{level.label}</span>
                                <h3>{level.title}</h3>
                                <p>{level.copy}</p>
                                <ul>{level.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
                            </article>
                        ))}
                    </div>
                    <div className="math-enquiry">
                        <p>Not sure which programme fits?</p>
                        <Link href="/contact">Ask us about Mathematics <span aria-hidden="true">→</span></Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
