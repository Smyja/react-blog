import React, { useRef, useState } from "react";
import {useNavigate} from "react-router-dom"
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
// import { history } from "../helpers";
import { authAxios } from "../services/authenticatiion";
import { api } from "../api";

const PostCreate = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(null);
  const [markdown, setMarkdown] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const mdParser = new MarkdownIt(/* Markdown-it options */);

  const fileInputRef = useRef();
  const history = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    console.log(markdown);
    const formData = new FormData();
    formData.append("thumbnaill", thumbnail);
    formData.append("title", title);
    formData.append("content", markdown);
    console.log(formData);
    authAxios
      .post(api.posts.create, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        history("/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err.message || err);
      });
  }

  return (
    <div>
      <header>Create a post List</header>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        {thumbnail && thumbnail.name}
        <label>Title</label>
        <input
          className="text-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Content</label>

        <MdEditor
          style={{ height: "500px", width: "600px" }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={({ text }) => setMarkdown(text)}
        />

        <button type="button" onClick={() => fileInputRef.current.click()}>
          Choose a thumbnail
        </button>
        <input
          ref={fileInputRef}
          type="file"
          onChange={(e) => setThumbnail(e.target.files[0])}
          hidden
        />
        <button type="submit" loading={loading} disabled={loading}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
