/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
import React from 'react';

export default function BlogArticle(props) {
  return (
        <div className="secondaryColor p-10 rounded-xl">
            <article>
                <h3 className="name font-bold text-xl">{props.title}</h3>
                <p className="leading-8 pt-3 pb-2">{props.description}</p>
                <p className="name font-bold mt-auto">Read more</p>
            </article>
        </div>
  );
}
