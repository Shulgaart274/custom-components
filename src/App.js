import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./pagination/pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [pageOfItems, setPageOfItems] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  const onChangePage = (pageOfItems) => {
    setPageOfItems(pageOfItems);
  };

  useEffect(() => {
    onChangePage(pageOfItems);
  }, [pageOfItems]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ul className="ul">
        {pageOfItems &&
          pageOfItems.map((post) => (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          ))}
      </ul>
      <Pagination
        items={posts}
        onChangePage={onChangePage}
        initialPage={3}
        pageSize={10}
        numOfPages={10}
        color="dark"
      />
    </div>
  );
}

export default App;
