// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const BlogAll = () => {
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
        setBlogPosts(data.blogs || []);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="py-16 bg-gradient-to-b from-blue-100 to-green-50">
      <div className="container mx-auto px-6">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold font-cursive text-green-700">
            All Blog Posts
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore all of our blogs for more tips and updates.
          </p>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <img
                  src={post.photo_url || "https://via.placeholder.com/600"}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3 text-green-700">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.description?.slice(0, 100)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogAll;
