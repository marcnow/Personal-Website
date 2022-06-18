import React from 'react';
import Footer from '../footer/Footer';
import NavBar from '../NavBar';
import blogList from '../../static/blogList,';
import BlogArticle from './BlogArticle';

export default function Blog() {
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
          {blogList.map((entry) => (
            <BlogArticle
              key={entry.key}
              title={entry.title}
              description={entry.description}
            />
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
