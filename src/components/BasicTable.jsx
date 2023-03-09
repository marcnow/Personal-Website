/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

export default function BasicTable(props) {
  const formatMonth = (month) => {
    switch (month) {
      case 0:
        return 'Jan';
      case 1:
        return 'Feb';
      case 2:
        return 'Mar';
      case 3:
        return 'Apr';
      case 4:
        return 'May';
      case 5:
        return 'Jun';
      case 6:
        return 'Jul';
      case 7:
        return 'Aug';
      case 8:
        return 'Sep';
      case 9:
        return 'Okt';
      case 10:
        return 'Nov';
      case 11:
        return 'Dec';
      default:
        return '';
    }
  };

  const formatDate = (createdAt) => {
    const createDate = new Date(createdAt);
    return (`${createDate.getDate()} ${formatMonth(createDate.getMonth())} ${createDate.getFullYear()}`);
  };

  return (
    <div className="robotoMono about">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Language</th>
            <th>Created At</th>
            <th>Size (kb)</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((row) => (
            <tr>
              <td>
                {row.name}
              </td>
              <td>{row.description}</td>
              <td>{row.language}</td>
              <td>{formatDate(row.created_at)}</td>
              <td>{row.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="min-h-[calc(100vh-39rem-314px)]" />
    </div>
  );
}
