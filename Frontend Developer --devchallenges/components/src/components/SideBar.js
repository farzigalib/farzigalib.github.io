import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const [activeMenuKey, setActiveMenuKey] = useState(null);
  const location = useLocation();

  const menu = useMemo(
    () => [
      {
        title: "Colors",
        path: "/colors",
      },
      {
        title: "Typography",
        path: "/typography",
      },
      {
        title: "Spaces",
        path: "/spaces",
      },
      {
        title: "Buttons",
        path: "/",
      },
      {
        title: "Inputs",
        path: "/inputs",
      },
      {
        title: "Grid",
        path: "/grid",
      },
    ],
    []
  );

  useEffect(() => {
    const savedKey = localStorage.getItem("activeMenuKey");
    if (savedKey !== null) {
      setActiveMenuKey(parseInt(savedKey));
    }
  }, []);

  useEffect(() => {
    const activeMenuItem = menu.findIndex(
      (item) => item.path === location.pathname
    );
    if (activeMenuItem !== -1) {
      setActiveMenuKey(activeMenuItem);
      localStorage.setItem("activeMenuKey", activeMenuItem);
    }
  }, [location.pathname, menu]);

  const activeClass = (idx) => {
    localStorage.setItem("activeMenuKey", idx);
    setActiveMenuKey(idx);
  };

  return (
    <div className="sidebar-container">
      <a
        href="https://devchallenges.io/"
        rel="noreferrer"
        target="_blank"
        className="heading"
      >
        <div className="dev">Dev</div>
        <div className="io">challenges.io</div>
      </a>
      <ul className="nav-list">
        {menu?.map((item, idx) => (
          <li className="nav-title" key={idx}>
            <Link
              to={item?.path}
              className={activeMenuKey === idx ? "nav-link active" : "nav-link"}
              onClick={() => activeClass(idx)}
            >
              {item?.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
