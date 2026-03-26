import React, { useState } from 'react'; // Update this at the to
import './Home.css';
import image1 from '../assets/images/image1.svg';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';
import writing from '../assets/images/writing.png';
import brand from '../assets/images/brand.png';
import design from '../assets/images/design.png';
import ebook from '../assets/images/ebook.png';
import blogfirst from '../assets/images/blogfirst.png';
import blogSecond from '../assets/images/blogSecond.png';
import blogThird from '../assets/images/blogThird.png';
import blogLast from '../assets/images/blogLast.png';
import brandHover from '../assets/images/brandHover.png';
import designHover from '../assets/images/desingHover.png';
import ebookHover from '../assets/images/ebookHover.png';
import writingHover from '../assets/images/writingHover.png';

const marqueeImages = [image1, image2, image3, image4];

const services = [
    { title: 'Writing', desc: 'I build websites that turn cold visitors into paying customers.', class: 'card-writing', img: writing, hoverImg: writingHover },
    { title: 'Ebook', desc: 'I build websites that turn cold visitors into paying customers.', class: 'card-ebook', img: ebook, hoverImg: ebookHover },
    { title: 'Brand Management', desc: 'I build websites that turn cold visitors into paying customers.', class: 'card-brand-management', img: brand, hoverImg: brandHover },
    { title: 'Design & Development', desc: 'I build websites that turn cold visitors into paying customers.', class: 'card-design-development', img: design, hoverImg: designHover },
];

const faqs = [
    { question: "Why should we work with an agency that has just started their operations?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
    { question: "Why should we work with an agency that has just started their operations?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { question: "Why should we work with an agency that has just started their operations?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { question: "Why should we work with an agency that has just started their operations?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
];

const blogs = [
    { title: 'Blogs title could go upto 2 line smax', desc: 'I build websites that turn cold visitors into paying customers.', img: blogfirst },
    { title: 'Blogs title could go upto 2 line smax', desc: 'I build websites that turn cold visitors into paying customers.', img: blogSecond },
    { title: 'Blogs title could go upto 2 line smax like this..', desc: 'I build websites that turn cold visitors into paying customers.', img: blogThird },
    { title: 'Blogs title could go upto 2 line smax', desc: 'I build websites that turn cold visitors into paying customers.', img: blogLast },
];

const Home = () => {

    const [openIndex, setOpenIndex] = useState(0); // First one open by default

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div className="container">
            {/* HERO */}
            <section className="hero">
                <h1>
                    Your website should print <span>customers</span> not collect impressions
                </h1>
                <p>I build websites that turn cold visitors into paying customers.</p>
            </section>

            <section className="showcase">
                <div className="marquee" aria-hidden="false">
                    <div className="marquee-content">
                        {[...marqueeImages, ...marqueeImages].map((src, i) => (
                            <img key={i} src={src} alt={`Showcase ${i % marqueeImages.length + 1}`} />
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES INTRO */}
            <section className="services-intro">
                <p className="small">You Imagine. We Make It Real.</p>
                <h2>
                    We offer full range of services, so you don't have to find the right person for each need.
                </h2>
            </section>

            {/* SERVICES GRID */}
            <section className="services">
                {services.map((s) => (
                    <div
                        className={`card ${s.class}`}
                        key={s.title}
                        style={{
                            backgroundImage: `url(${s.img})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center 40px', // Adjust 40px to push image down/up
                            backgroundSize: '200px auto',      // Controls image size
                            '--hover-img': `url(${s.hoverImg})`
                        }}
                    >
                        <div className="card-content">
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* WHY US */}
            <section className="why">
                <h2>
                    Why <span>us</span> and why <span>now</span>?
                </h2>
                <div className="why-grid">
                    <div className="why-left">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged.
                        </p>
                        <button className="get-in-touch">Get In Touch</button>
                    </div>

                    <div className="why-right">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                        </p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="faq-section">
                <h2 className="faq-title">
                    Things founders usually want to know before working with <span>Vantra</span>.
                </h2>

                <div className="faq-container">
                    <div className="faq-sidebar">
                        <h3>Frequently Asked Questions</h3>
                    </div>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div
                                className={`faq-item ${openIndex === index ? 'active' : ''}`}
                                key={index}
                            >
                                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                    <h4>{faq.question}</h4>
                                    <span className="faq-icon">{openIndex === index ? '×' : '+'}</span>
                                </div>
                                {openIndex === index && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="blog-marquee-section">
                <div className="blog-header">
                    <h2>This is about Blogs</h2>
                    <button className="see-more">See More</button>
                </div>

                <div className="blog-marquee">
                    <div className="blog-marquee-content">
                        {[...blogs].map((blog, i) => (
                            <div className="blog-card" key={i}>
                                <img src={blog.img} alt="Blog cover" />
                                <div className="blog-card-body">
                                    <h4>{blog.title}</h4>
                                    <p>{blog.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-container">
                <div className="cta-card">
                    <h2>Let’s Connect & Scale</h2>
                    <h3>Future-Ready IT Management for Your Business</h3>
                    <p>
                        Partner with Lastoria Systems for seamless IT management that drives efficiency and growth. Get in touch
                        today and let’s build a smarter, more secure future for your business.
                    </p>
                    <div className="cta-buttons">
                        <button className="btn-primary">Get Started with Service</button>
                        <button className="btn-secondary">Book a Consultation Call</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;