import React, { useEffect, useMemo, useState } from 'react'
import MarkdownIt from 'markdown-it'
import axios from 'axios'

const md = new MarkdownIt({
  html: true,
  linkify: true
});

export default ({ match }) => {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const id = match.params.id;
    axios.get(`/api/blog/${id}`).then(({ data }) => {
      if (data.success) {
        setBlog(data.result.blog)
        console.log("get blog", data);
      } else {
        console.error("get blog error", data);
      }
    })
  }, []);

  const html = useMemo(() => md.render(blog.content || ""), [blog])

  return (
    <div className="markdown-body">
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  )
}
