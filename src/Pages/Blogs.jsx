import BlogsData from "../Data/BlogsData";
import Blog from "../Components/BlogCard";
const Blogs = (props) => {
  return (
    <div
      className="container  "
    >
      <div className=" mx-auto">
        <div className="p-6  lg:justify-between grid lg:grid-cols-2 gap-4">
          {BlogsData.map((item) => (
            <Blog
              key={item.id}
              category={item.category}
              title={item.title}
              item={item}
              profile={item.profile}
              writer={item.writer}
              learnmore={item.learnmore}
              desicription={item.description}
              profession={item.profession}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
