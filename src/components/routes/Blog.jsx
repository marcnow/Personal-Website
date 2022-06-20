import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import NavBar from '../NavBar';
import blogList from '../../static/blogList,';
import BlogArticle from './BlogArticle';

export default function Blog() {
  function createLink(entry) {
    return (
      <Link to={`/blog/${entry.title.replaceAll(' ', '-').toLowerCase()}`}>
        <BlogArticle
          key="{entry.key}"
          link={entry.title.replaceAll(' ', '-').toLowerCase()}
          title={entry.title}
          description={entry.description}
        />
      </Link>
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
        <div className="p-8 primaryColor text-white grid gap-8 grid-cols-2">
          {blogList.map((entry) => createLink(entry))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
