/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
import React from 'react';

export default function BlogArticle(props) {
  return (
        <div className="secondaryColor p-10 rounded-xl">
            <article>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </article>
        </div>
  );
}
