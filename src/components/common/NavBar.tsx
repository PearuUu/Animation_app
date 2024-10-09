import React, { Component } from "react";
import NavBarItem from "../../models/NavBarItem";
import ThemeController from "./ThemeController";

interface NavBarProps {
  title: string;
  links: NavBarItem[];
}

export default class NavBar extends Component<NavBarProps> {
    GenerateNavLinks(links:NavBarItem[]) {
        return links.map((link: NavBarItem, index: number) => (
          <li key={index}>
            {link.SubItems.length > 0 ? (
              <details>
                <summary>{link.Title}</summary>
                <ul>
                  {link.SubItems.map((item: NavBarItem, subIndex: number) => (
                    <li key={subIndex}>
                      <a>{item.Title}</a>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <a>{link.Title}</a>
            )}
          </li>
        ));
    }

    

  render() {
    const { title, links } = this.props;

    return (
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {this.GenerateNavLinks(links)}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">{title}</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {this.GenerateNavLinks(links)}
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeController/>
        </div>
      </div>
    );
  }
}
