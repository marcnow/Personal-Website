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
      <header>
        <NavBar />
        <div className="primaryColor">
          <div className="pt-12 pb-12 w-full ml-auto mr-auto pr-2 pl-2 max-w-[84rem] text-center">
            <h1 className="text-6xl mb-8 mt-2 text-white">Blog</h1>
          </div>
        </div>
      </header>
      <main>
        <div className="p-8 primaryColor text-white blogGrid content-center justify-center">
          {blogList.map((entry) => createLink(entry))}
        </div>
        <div className="primaryColor h-screen" />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
