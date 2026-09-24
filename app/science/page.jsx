import Link from "next/link";
import "./style.css";

export const metadata = {
    title: "Science Tuition Singapore | Simply Smart Enrichment",
    description:
        "Primary Science tuition, Secondary and O-Level Science, Chemistry, Physics and Biology programmes in Singapore.",
};

const subjectAreas = [
    {
        type: "chemistry",
        label: "CHEMISTRY",
        title: "Matter, reactions and change.",
        description: "Build clear links between particles, calculations and observable reactions.",
        topics: ["Chemical Calculations", "Acids & Bases", "Electrolysis", "Organic Chemistry"],
        visual: (
            <div className="science-chem-visual" aria-hidden="true">
                <span><small>11</small>Na</span><i>+</i><span><small>17</small>Cl</span>
            </div>
        ),
    },
    {
        type: "physics",
        label: "PHYSICS",
        title: "Forces, energy and systems.",
        description: "Translate physical principles into diagrams, calculations and exam answers.",
        topics: ["Mechanics", "Electricity", "Thermal Physics", "Waves"],
        visual: (
            <svg className="science-wave-visual" viewBox="0 0 240 90" aria-hidden="true">
                <path className="science-wave-axis" d="M8 45 H232" />
                <path className="science-wave-line" d="M8 45 C28 5 48 5 68 45 S108 85 128 45 S168 5 188 45 S218 82 232 45" />
            </svg>
        ),
    },
    {
        type: "biology",
        label: "BIOLOGY & GENERAL SCIENCE",
        title: "Living systems and inquiry.",
        description: "Understand biological structures while strengthening observation and experimental skills.",
        topics: ["Cell Biology", "Body Systems", "Ecology", "Scientific Inquiry"],
        visual: (
            <svg className="science-cell-visual" viewBox="0 0 150 110" aria-hidden="true">
                <path d="M22 55 C22 22 48 10 79 16 C111 22 134 43 124 74 C114 102 81 102 52 94 C31 88 22 75 22 55Z" />
                <circle cx="76" cy="55" r="18" /><circle cx="47" cy="45" r="5" /><circle cx="104" cy="70" r="6" />
            </svg>
        ),
    },
];

const helpSteps = [
    ["01", "Clear Concepts", "Complex processes are explained through precise models and examples."],
    ["02", "Focused Practice", "Questions progress by topic, skill and level of difficulty."],
    ["03", "Exam Techniques", "Students learn to analyse data and answer with scientific precision."],
];

const elements = [
    { number: 1, symbol: "H", name: "Hydrogen", group: "nonmetal", fact: "The lightest element" },
    { number: 6, symbol: "C", name: "Carbon", group: "nonmetal", fact: "The basis of organic chemistry" },
    { number: 8, symbol: "O", name: "Oxygen", group: "nonmetal", fact: "Essential for respiration" },
    { number: 11, symbol: "Na", name: "Sodium", group: "metal", fact: "A reactive alkali metal" },
    { number: 17, symbol: "Cl", name: "Chlorine", group: "halogen", fact: "A reactive halogen" },
    { number: 26, symbol: "Fe", name: "Iron", group: "metal", fact: "A widely used transition metal" },
];

const levels = [
    {
        label: "Primary",
        title: "Primary Science",
        copy: "Inquiry, experimental skills, open-ended questions and PSLE Science preparation.",
        topics: ["P3–P6", "PSLE", "Inquiry"],
    },
    {
        label: "Secondary",
        title: "O-Level Sciences",
        copy: "Secondary Science tuition in Biology, Chemistry and Physics with exam-focused practice.",
        topics: ["Biology", "Chemistry", "Physics"],
    },
    {
        label: "Junior College",
        title: "H1 & H2 Sciences",
        copy: "JC Chemistry and Physics for deeper analysis and A-Level examination readiness.",
        topics: ["Chemistry", "Physics", "A-Level"],
    },
    {
        label: "Challenge",
        title: "Science Olympiad",
        copy: "Advanced reasoning, experimental analysis and competition-level preparation.",
        topics: ["Reasoning", "Analysis", "Competition"],
    },
];

export default function Science() {
    return (
        <main className="science-page">
            <section className="science-hero">
                <div className="section-container science-hero-grid">
                    <div className="science-hero-copy">
                        <p className="science-eyebrow science-eyebrow-statement">UNDERSTAND SCIENCE. NOT JUST MEMORISE IT.</p>
                        <h1><span>Science</span><br />Programmes</h1>
                        <p className="science-hero-intro">
                            Clear explanations, structured practice and exam-focused strategies
                            for Primary, Secondary, and JC Science tuition in Singapore.
                        </p>
                    </div>

                    <div className="science-hero-lab" aria-hidden="true">
                        <div className="science-orbit science-orbit-one"><i></i></div>
                        <div className="science-orbit science-orbit-two"><i></i></div>
                        <div className="science-nucleus"><span></span><span></span><span></span></div>
                        <div className="science-hero-elements">
                            <span className="science-tile-h"><small>1</small><strong>H</strong><em>Hydrogen</em></span>
                            <span className="science-tile-o"><small>8</small><strong>O</strong><em>Oxygen</em></span>
                            <span className="science-tile-c"><small>6</small><strong>C</strong><em>Carbon</em></span>
                            <span className="science-tile-fe"><small>26</small><strong>Fe</strong><em>Iron</em></span>
                        </div>
                        <svg className="science-molecule" viewBox="0 0 170 120">
                            <path d="M44 65 L83 35 L126 68 M83 35 L88 92" />
                            <circle cx="44" cy="65" r="14" /><circle cx="83" cy="35" r="18" /><circle cx="126" cy="68" r="13" /><circle cx="88" cy="92" r="11" />
                        </svg>
                    </div>
                </div>
            </section>

            <section className="science-subjects">
                <div className="section-container">
                    <div className="science-section-heading">
                        <p className="science-eyebrow science-eyebrow-statement">SEE THE SYSTEM BEHIND THE FACTS.</p>
                        <h2>What Students Learn</h2>
                        <p>Core ideas drawn from the Science programmes already offered at Simply Smart.</p>
                    </div>
                    <div className="science-subject-grid">
                        {subjectAreas.map((subject) => (
                            <article className={`science-subject-card ${subject.type}`} key={subject.label}>
                                <div className="science-subject-visual">{subject.visual}</div>
                                <span>{subject.label}</span>
                                <h3>{subject.title}</h3>
                                <p>{subject.description}</p>
                                <ul>{subject.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="science-help">
                <div className="section-container science-help-grid">
                    <div className="science-help-intro">
                        <p className="science-eyebrow science-eyebrow-statement">OBSERVE. EXPLAIN. ANSWER PRECISELY.</p>
                        <h2>How We Help</h2>
                    </div>
                    <div className="science-help-list">
                        {helpSteps.map(([number, title, copy]) => (
                            <article key={number}>
                                <span>{number}</span>
                                <div><h3>{title}</h3><p>{copy}</p></div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="science-elements">
                <div className="section-container science-elements-grid">
                    <div className="science-elements-copy">
                        <p className="science-eyebrow science-eyebrow-statement">SMALL SYMBOLS. A WHOLE LANGUAGE.</p>
                        <h2>Elements in Focus</h2>
                        <p>
                            Atomic numbers identify elements; symbols help scientists communicate
                            precisely. Hover over each tile for a concise fact.
                        </p>
                        <div className="science-legend"><span></span>Non-metal <i></i>Metal <b></b>Halogen</div>
                    </div>
                    <div className="science-element-grid" aria-label="Selected periodic table elements">
                        {elements.map((element) => (
                            <article className={`science-element ${element.group}`} key={element.symbol} tabIndex="0">
                                <small>{element.number}</small>
                                <strong>{element.symbol}</strong>
                                <span>{element.name}</span>
                                <p>{element.fact}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="science-levels">
                <div className="section-container">
                    <div className="science-section-heading science-levels-heading">
                        <p className="science-eyebrow science-eyebrow-statement">SCIENCE SUPPORT THAT PROGRESSES WITH YOU.</p>
                        <h2>Programme Levels</h2>
                        <p>From Primary Science tuition to O-Level, Junior College and Olympiad preparation.</p>
                    </div>
                    <div className="science-level-grid">
                        {levels.map((level) => (
                            <article className="science-level-card" key={level.title}>
                                <span className="science-level-label">{level.label}</span>
                                <h3>{level.title}</h3>
                                <p>{level.copy}</p>
                                <ul>{level.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
                            </article>
                        ))}
                    </div>
                    <div className="science-enquiry">
                        <p>Looking for the right Science programme?</p>
                        <Link href="/contact">Ask us about Science <span aria-hidden="true">→</span></Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
