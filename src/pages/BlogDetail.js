import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { blogData } from './BlogData';
import './BlogDetail.css';

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const blog = blogData.find(b => b.id === parseInt(id));

    // FILTER LOGIC
    const similarBlogs = blogData
        .filter(b => b.category === blog?.category && b.id !== blog?.id)
        .slice(0, 3); // Get only the first 3 matches

    if (!blog) return <div className="not-found">Blog not found</div>;

    return (
        <div className="blog-detail-page">
            <button className="back-btn" onClick={() => navigate(-1)}>
                <FaArrowLeft /> Back
            </button>

            <span className="blog-tag">{blog.category}</span>
            <h1 className="main-title">{blog.title}</h1>
            <p className="intro-text">{blog.longDesc}</p>

            <div className="featured-image">
                <img src={blog.img} alt={blog.title} />
            </div>

            <article className="extended-content">
                {/* Dynamically render sections from the array */}
                {blog.sections.map((section) => (
                    <div key={section.id} className="content-block">
                        <h3>{section.heading}</h3>
                        <p>{section.text}</p>
                    </div>
                ))}
            </article>

            {/* Similar Journals Section */}
            <div className="blog-detail-page">
                {/* ... Your main blog content ... */}

                {/* SIMILAR JOURNALS SECTION */}
                {similarBlogs.length > 0 && (
                    <section className="similar-section">
                        <hr className="divider" />
                        <h2>Similar Journals</h2>
                        <div className="similar-grid">
                            {similarBlogs.map(sBlog => (
                                <div
                                    key={sBlog.id}
                                    className="small-blog-card"
                                    onClick={() => {
                                        navigate(`/journal/${sBlog.id}`);
                                        window.scrollTo(0, 0); // Reset scroll to top
                                    }}
                                >
                                    <img src={sBlog.img} alt={sBlog.title} />
                                    <h4>{sBlog.title}</h4>
                                    <p>{sBlog.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default BlogDetail;