/* eslint-disable react/prop-types */
import styles from "./MainComponent.module.css"
import Content from "../Content/Content";
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";
import { useState } from "react";

const MainComponent = ({src, heading}) => {

  const [sideBarOpen, setSideBarOpen ] = useState(false);

  return (
    <div style={sideBarOpen ? {marginLeft: "5%"} : {}} className={styles.main}>
      <img onClick={()=> setSideBarOpen(!sideBarOpen)} className={styles.hamburger} src="/Icons/hamburger.svg" alt="Menu"/>
        <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}  heading = {heading} />
      <div className={styles.rightDiv}>
        <TopBar />
        <div className={styles.contentHeader}>
          <p>{heading}</p>
          <p>Welcome to your {heading.toLowerCase()}</p>
        </div>
        <Content src={src} />
      </div>
    </div>
  );
};

export default MainComponent;
