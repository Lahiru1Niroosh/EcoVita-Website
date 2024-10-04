// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogSingle = () => {
  const { id } = useParams(); // Get the blog post ID from the URL parameters
  const [Post, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetching single blog post by ID
  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(
          `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
        );
        const data = await response.json();
        setBlogPost(data); // Set the blog post data received from the API
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
      </div>
    );
  }

  if (!Post) {
    return <p className="text-center text-lg text-gray-600">Blog post not found.</p>;
  }

  return (
    <div className="py-16 bg-gradient-to-b from-blue-100 to-green-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-10">
          <img
            src={Post.photo_url || "https://via.placeholder.com/600"} // Ensure photo_url is displayed
            alt={Post.title}
            className="w-full h-96 object-cover mb-8 rounded-lg"
          />
          <h1 className="text-5xl font-bold mb-6 text-green-700">{Post.title}</h1>
          <p className="text-sm text-gray-500 mb-2">
            {new Date(Post.created_at).toLocaleDateString()} {/* Display formatted creation date */}
          </p>
          <p className="text-lg text-gray-600 mb-4">{Post.description}</p>
          <div
            className="mt-4 text-gray-700"
            dangerouslySetInnerHTML={{ __html: Post.content_html }} // Render HTML content safely
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
