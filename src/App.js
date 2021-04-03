import React, { useState } from 'react';
import './App.css';
import withPrettyDate from './hoc/withPrettyDate.js';

function DateTime(props) {
  return (
      <p className="date">{props.date}</p>
  )
}

function Video(props) {
        return (
        <div className="video">
               <iframe
                title="Video title"
                src={props.url}
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                 ></iframe>
            <DateTime date={props.date} />
        </div>
    )
}

const UpgradedVideo = withPrettyDate(Video);

function VideoList(props) {
    return props.list.map(item => <UpgradedVideo url={item.url} date={item.date} />);
}

export default function App() {

    // eslint-disable-next-line no-unused-vars
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-03-01 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2020-12-31 12:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-01-11 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-04-01 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-02-01 13:45:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2020-04-12 13:22:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}