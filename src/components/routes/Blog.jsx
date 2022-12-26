import React from 'react';
import Footer from '../footer/Footer';
import NavBar from '../NavBar';
import blogList from '../../static/blogList';
import BlogArticle from './BlogArticle';

export default function Blog() {
  function createLink(entry) {
    return (
      <a href={`/blog/${entry.title.replaceAll(' ', '-').toLowerCase()}`}>
        <BlogArticle
          key={entry.key}
          link={entry.title.replaceAll(' ', '-').toLowerCase()}
          title={entry.title}
          description={entry.description}
        />
      </a>
    );
  }

  return (
    <div>
      <div className="primaryColor">
        <header className="header-container">
          <NavBar />
        </header>
        <main className="main-container">
          {/* we calculate the height based on the
          screen size minus the padding top (5rem) and the footer height */}
          <div className="primaryColor pt-20 h-[calc(100vh-5rem-314px)]">
            <div>
              <h1 className="text-center">Blog</h1>
            </div>
            <div className="blogGrid">
              {blogList.map((entry) => createLink(entry))}
            </div>
          </div>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
