import { useParams } from "react-router-dom";
import Blog1 from "./Blog1";

const MyBlog = () => {
  const { id } = useParams();
  const blog1 = <Blog1 />;
  const blogs = [
    {
      id: 1,
      content: blog1,

    },
  ];

  return (
    <>
      {blogs
        .filter((el) => el.id === +id)
        .map((el) => {
          return (
            <div key={el.id}>
              <div>{blog1}</div>
              <div>{el.content}</div>
            </div>
          );
        })}
    </>
  );
};
export default MyBlog;
