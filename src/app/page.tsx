"use client";
import { useEffect, useState } from "react";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { MdOutgoingMail } from "react-icons/md";
import { BsWordpress } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

// Define Post type
type Post = {
  _id: string;
  title: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/post");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.log("Error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading
      </div>
    );

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Left Section */}
        <div className="col-span-2 p-8 flex flex-col justify-between min-h-screen border-r border-gray-700">
          <div>
            <nav className="mb-12">
              <ul className="space-y-4"></ul>
            </nav>
            <h2 className="text-xl font-bold mb-4">
              Next.js, React, React Native (React CLI and Expo), Vite, Redux
              Toolkit
            </h2>
            <h2 className="text-xl font-bold mb-4">
              Node.js, Express, Koa (Strapi)
            </h2>
            <h2 className="text-xl font-bold mb-4">Python, Django</h2>
            <br></br>
            <h3 className="text-l mb-4">
              Database & Storage: MongoDB, Redis, AWS S3, Cloudinary
            </h3>
            <h3 className="text-l mb-4">Real-time: Websocket | SocketIO</h3>
            <h3 className="text-l mb-4">API testing: Postman, Chai</h3>
            <h3 className="text-l mb-4">
              Authentication: OAuth, Passport, Authjs
            </h3>
            <h3 className="text-l mb-4">
              BullMQ, Redis, Cron jobs, Selenium, BeautifulSoup, Nodemailer, Swagger,
            </h3>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-1 flex flex-col justify-start items-end text-right p-8">
          <h1 className="text-3xl font-bold mb-4 text-yellow-300">Miminiverse</h1>
          <TypeAnimation
            sequence={[
              "Builder ()",
              2000,
              "Creator ()",
              2000,
              () => {
                console.log("Done Typing");
              },
            ]}
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1em" }}
          />
          <div className="mt-8">
            <p>
              Hello, I'm Tam. I like programming and love to build cool stuff.
              Happy to connect!
            </p>
          </div>
          <div className="absolute bottom-8 right-8 flex flex-col space-y-4">
            <a
              target="_blank"
              href="https://github.com/Miminiverse"
              className="text-accent hover:text-yellow-400"
            >
              <AiOutlineGithub size={40} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/minh-tam-pham-8b6ba2200/"
              className="text-accent hover:text-yellow-400"
            >
              <AiOutlineLinkedin size={40} />
            </a>
            <a
              target="_blank"
              href="https://tamp.blog/"
              className="text-accent hover:text-yellow-400"
            >
              <BsWordpress size={40} />
            </a>
            <a
              target="_blank"
              href="mailto:minhtamphamtol@gmail.com"
              className="text-accent hover:text-yellow-400"
            >
              <MdOutgoingMail size={40} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
