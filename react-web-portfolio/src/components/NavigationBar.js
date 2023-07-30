import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function NavigationBar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <nav fixed="top" expand="md" className="sticky navbar">
      <ul className="flex">
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#projects">Projects</a>
        </li>
        <li>
          <a href="/#blog">Blog</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
        <li>
          <a href="#resume -link" target="_blank" without rel="noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
