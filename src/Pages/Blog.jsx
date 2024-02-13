import React from "react";
import "./blog.css";
import "../App.css";
import SobreMi from "../components/SobreMi";
import BlogNavbar from "../components/BlogNavbar";
import BentoGrid from "../components/BentoGrid";
export default function Blog() {
  return (
    <>
      <BlogNavbar />
      <main>
        <SobreMi />
        <BentoGrid />
      </main>
    </>
  );
}
