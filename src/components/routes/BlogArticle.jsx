/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
import React from 'react';

export default function BlogArticle(props) {
  return (
        <div className="secondaryColor p-10 rounded-xl">
            <article>
                <h4 className="name font-bold text-xl">{props.title}</h4>
                <p className="pt-3 pb-2">{props.description}</p>
                <p className="name font-bold">Read more</p>
            </article>
        </div>
  );
}
