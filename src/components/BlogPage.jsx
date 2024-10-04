// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetching blog posts from the provided API
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(
          "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30"
        );
        const data = await response.json();
        setBlogPosts(data.blogs.slice(0, 6) || []); // Display only the first 6 blog posts
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <>
      <span id="blog"></span>
      <div className="bg-gradient-to-r from-blue-300 to-green-500 py-16">
        <div className="container mx-auto px-6">

          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold font-cursive text-black" data-aos="fade-up">
              Our Latest Blogs
            </h1>
            <p className="mt-4 text-lg text-gray-600" data-aos="fade-up" data-aos-delay="200">
              Stay informed with our latest updates, tips, and articles on healthy living and sustainability.
            </p>
          </div>

          {/* Loading Spinner */}
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <div className="loader ease-linear rounded-full border-8 border-t-8 border-green-500 h-16 w-16 animate-spin"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-green-200 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-500 group"
                    onClick={() => navigate(`/blog/${post.id}`)} // Navigate to BlogSingle page
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <img
                      src={post.photo_url || "https://via.placeholder.com/600"}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-3 text-green-700 group-hover:text-green-600 transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                        {post.description?.slice(0, 100)}...
                      </p>
                      <button
                        onClick={() => navigate(`/blog/${post.id}`)}
                        className="inline-block px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-500 transition-all duration-300 group-hover:bg-green-700"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <div className="text-center">
                <button
                  onClick={() => navigate('/blogs')}
                  className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow-lg hover:bg-green-500 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  View All
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
