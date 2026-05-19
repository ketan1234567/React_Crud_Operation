import React, { useEffect, useState } from "react";
import { getPost } from "../Api/PostApi";
import "../App.css";

export const Posts = () => {
  const [data, setData] = useState([]);

  const getPostData = async () => {
    try {
      const res = await getPost();
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <section className="section-post">
      <ol>
        {data.map((curElem) => {
          const { id, title, body } = curElem;

          return (
            <li key={id}>
              <p>
                <strong>Title:</strong> {title}
              </p>
              <p>
                <strong>Body:</strong> {body}
              </p>
              <button>Edit</button>
              <button className="btn-delete">Delete</button>
            </li>
          );
        })}
      </ol>
    </section>
  );
};