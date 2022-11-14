import { Link, useNavigate } from "react-router-dom";
const Blogs = () => {
  const navigation = useNavigate();
  let blog = [
    {
      id: 1,
      content: "Web Basic",
    },
  ];
  const handleBlog = (id) => {
    navigation(`page/${id}`);
  };
  return (
    <>
      <h1 className="sub-title">Blog</h1>
      {blog.map((el) => {
        return (
          <div  key={el.id}>
            <div className="title-blg" onClick={() => handleBlog(el.id)}>{el.content}</div>
          </div>
        );
      })}
      <Link to={"blog/page"}></Link>
    </>
  );
};
export default Blogs;
