import Link from "next/link";
import "./style.css";

export const metadata = {
    title: "How to Be Exam Smart: Heart, Mind and Eye | Simply Smart Enrichment",
    description: "Help students approach examinations with the right attitude, thinking process and answer presentation using the Heart, Mind and Eye framework.",
};

export default function ExamSmartArticle() {
    return (
        <main className="article-page exam-smart-article">
            <section className="article-hero">
                <div className="article-container">
                    <span className="article-category">EXAM STRATEGIES</span>
                    <h1>How to Be Exam Smart: Heart, Mind and Eye</h1>
                    <p className="article-intro">
                        Doing well in exams is not just about studying harder or memorising more. Strong students learn how to approach questions with the right attitude, the right thinking process and the right way of presenting their answers.
                    </p>
                    <div className="article-meta">
                        <span>📅 30 August 2026</span>
                        <span>By Simply Smart Enrichment</span>
                        <span>⏱ 5 min read</span>
                    </div>
                </div>
            </section>

            <section className="article-image-section">
                <div className="article-container">
                    <img src="/images/heartmindeye.png" alt="Student using the Heart, Mind and Eye approach while preparing for an examination" className="article-image" />
                </div>
            </section>

            <section className="article-content-section">
                <div className="article-container article-content">
                    <p>A useful way to think about becoming exam smart is through three areas: <strong>Heart, Mind and Eye</strong>.</p>

                    <div className="article-highlight">
                        <h3>The Heart, Mind and Eye Framework</h3>
                        <ul>
                            <li><strong>Heart:</strong> Understand the question before you solve it.</li>
                            <li><strong>Mind:</strong> Think through the solution step by step.</li>
                            <li><strong>Eye:</strong> Present your answer clearly for the examiner.</li>
                        </ul>
                    </div>

                    <h2>1. HEART — Understand Before You Solve</h2>
                    <p>The first step to becoming exam smart is to genuinely understand what the question is asking.</p>
                    <p>Students sometimes rush into calculations or start writing immediately because the question looks familiar. However, two questions that look similar may actually be testing very different concepts.</p>
                    <p>Before solving, ask yourself:</p>
                    <ul>
                        <li>What topic is this question testing?</li>
                        <li>What information has been given?</li>
                        <li>What exactly am I being asked to find or explain?</li>
                        <li>Is there any hidden condition or important keyword?</li>
                        <li>Have I seen a similar question before?</li>
                    </ul>
                    <p>The aim is to <strong>read carefully, recognise the problem and understand it before acting</strong>.</p>
                    <p>Instead of simply memorising procedures, students should understand <strong>why</strong> a method works. This makes it much easier to handle unfamiliar or slightly modified examination questions.</p>
                    <blockquote><strong>Exam Smart Tip:</strong> Do not immediately ask, “Which formula should I use?” First ask, <strong>“What is actually happening in this question?”</strong></blockquote>

                    <h2>2. MIND — Think Step by Step</h2>
                    <p>Once the question is understood, the next stage is deciding <strong>how to solve it</strong>.</p>
                    <p>This requires more than remembering a model answer. Students need to develop a clear thinking process.</p>
                    <div className="article-note">
                        <h3>A Clear Thinking Process</h3>
                        <p><strong>Understand → Plan → Solve → Check</strong></p>
                    </div>
                    <p>For example, instead of trying to solve a complicated Mathematics problem in one jump, identify what you already know, what you need to find first, and how each result leads to the next step.</p>
                    <p>For Science questions, think about the relevant concept before writing the explanation. Ask yourself:</p>
                    <ul>
                        <li>Which principle applies here?</li>
                        <li>What causes the observation?</li>
                        <li>What is the relationship between the variables?</li>
                        <li>How can I link the evidence to the conclusion?</li>
                    </ul>
                    <p>Over time, students build a collection of <strong>problem-solving strategies</strong> rather than memorising individual questions.</p>
                    <p>This is especially important in examinations because questions may be presented in unfamiliar contexts. A student who understands the strategy can adapt. A student who only memorises may become stuck once the wording changes.</p>
                    <blockquote><strong>Exam Smart Tip:</strong> When you get stuck, do not keep staring at the entire question. Ask: <strong>“What is the next smallest step I can solve?”</strong></blockquote>

                    <h2>3. EYE — Present Your Answer Clearly</h2>
                    <p>Knowing the answer is only part of the examination. The examiner must also be able to <strong>see your reasoning clearly</strong>.</p>
                    <p>Good presentation helps reduce careless mistakes and makes it easier for markers to award method marks.</p>
                    <div className="article-highlight">
                        <h3>For Mathematics</h3>
                        <ul>
                            <li>Show important working.</li>
                            <li>Write equations in a logical order.</li>
                            <li>Use correct mathematical notation.</li>
                            <li>Include units where required.</li>
                            <li>Clearly identify the final answer.</li>
                        </ul>
                    </div>
                    <div className="article-highlight">
                        <h3>For Science</h3>
                        <ul>
                            <li>Answer exactly what the question asks.</li>
                            <li>Use appropriate scientific terminology.</li>
                            <li>Link cause and effect clearly.</li>
                            <li>Avoid unnecessary information.</li>
                            <li>Ensure diagrams, labels and calculations are neat.</li>
                        </ul>
                    </div>
                    <p>Presentation is particularly important for longer questions. A correct idea written unclearly can sometimes lose marks simply because the reasoning is difficult to follow.</p>
                    <p>After completing the question, use your <strong>“examiner&apos;s eye.”</strong> Look at your answer as though you were marking someone else&apos;s work.</p>
                    <p>Ask yourself: <strong>Is my answer clear? Is every important step visible? Have I actually answered the question?</strong></p>
                    <blockquote><strong>Exam Smart Tip:</strong> Do not make the examiner search for your answer. Make your reasoning <strong>easy to follow and easy to award marks for</strong>.</blockquote>

                    <div className="article-summary">
                        <h3>Quick Summary</h3>
                        <ul>
                            <li>✔ Use your Heart to understand before acting.</li>
                            <li>✔ Use your Mind to plan and solve step by step.</li>
                            <li>✔ Use your Eye to present every answer clearly.</li>
                            <li>✔ Check that you have answered exactly what was asked.</li>
                        </ul>
                    </div>

                    <h2>Final Thoughts</h2>
                    <p>Being exam smart means combining understanding, strategy and clear communication. When students train their Heart, Mind and Eye, they become better prepared to handle both familiar and unfamiliar questions with confidence.</p>

                    <div className="article-conclusion">
                        <h3>Helping Students Become Exam Smart</h3>
                        <p>At Simply Smart Enrichment, students learn to understand each question, select an effective strategy and communicate their reasoning clearly. These habits help them approach examinations with greater confidence and independence.</p>
                    </div>

                    <section className="related-articles">
                        <h2>Continue Reading</h2>
                        <div className="related-links">
                            <Link href="/blog/how-to-improve-psle-mathematics-problem-solving">How to Improve PSLE Mathematics Problem Solving →</Link><br />
                            <Link href="/blog/how-to-master-psle-science-answering-techniques">How to Master PSLE Science Answering Techniques →</Link><br />
                            <Link href="/blog/why-every-child-can-benefit-from-mathematics-olympiad">Why Every Child Can Benefit from Mathematics Olympiad →</Link>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
}
