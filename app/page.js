"use client";
import Image from "next/image";
import styles from "./style.module.css";
import React, { useState } from "react";

export default function Home() {
  const [content, setContent] = useState("Send Notification");
  // function setContent() {}
  function handlClick() {
    if (content == "Send Notification") {
      setContent("Notification Sent");
    }
  }

  return (
    <main>
      <div className={styles.div}>
        <div className={styles.div}>
          <div className={styles.div}>
            <img
              src="https://www.shutterstock.com/image-vector/white-bell-icon-vector-orange-260nw-473846428.jpg"
              alt="bell-icon"
            ></img>
          </div>
        </div>
      </div>
      <button className={styles.button} onClick={handlClick}>
        {content}
      </button>
    </main>
  );
}
