import React, { useState } from 'react';
import './Journal.css';
import blogfirst from '../assets/images/blogfirst.png';
import { Link } from 'react-router-dom';
import { blogData } from './BlogData';

const categories = ["ALL", "NEWS", "TECH", "AI", "DOOMS", "DARK", "KNIGHT", "TRAVELLERS", "NOAH", "EVA"];

const Journal = () => {
    const [activeTab, setActiveTab] = useState("ALL");
    const filteredBlogs = activeTab === "ALL"
        ? blogData
        : blogData.filter(blog => blog.category === activeTab);

    return (
        <div className="journal-page">
            <header className="journal-header">
                <h1>Blogs & Articles</h1>
                <div className="filter-tabs">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
                            onClick={() => setActiveTab(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </header>

            <div className="journal-grid">
                {filteredBlogs.map(blog => (
                    /* The Link replaces the div and takes the key/className */
                    <Link to={`/journal/${blog.id}`} key={blog.id} className="blog-item">
                        <div className="blog-img-wrapper">
                            <img src={blog.img} alt={blog.title} />
                        </div>
                        <div className="blog-info">
                            <span className="blog-tag">{blog.category}</span>
                            <h3>{blog.title}</h3>
                            <p>{blog.desc}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Journal;