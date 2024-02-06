import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import ReactMarkdown from 'react-markdown';
import React, { useEffect, useState } from 'react';


const ReadmePage = () => {
    const [markdown, setMarkdown] = useState('');
  
    useEffect(() => {
      fetch('https://raw.githubusercontent.com/oslabs-beta/SQLens/main/README.md')
        .then(response => response.text())
        .then(text => setMarkdown(text))
        .catch(err => console.error(err));
    }, []);
  
    return (
      <article>
        <ReactMarkdown 
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
        >
          {markdown}
        </ReactMarkdown>
      </article>
    );
  };
  
  export default ReadmePage;

