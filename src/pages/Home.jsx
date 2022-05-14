import { useRef, useEffect, useState } from "react";
import React from "react";
import SecHeroe from "../components/SecHeroe/SecHeroe";
import { Launcher } from "react-chat-window";

import SecInfo from "../components/SecInfo/SecInfo";
import NavBar from "../components/NavBar/NavBar";

import FaceLogo from "../components/FaceLogo/FaceLogo";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, ZoomOut, Zoom } from "react-scroll-motion";

export default function Home() {
  const [isOnScroll, setIsOnScroll] = useState(false);
  const [x, setX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const handleEvent = () => {
    setOffsetY(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleEvent);
    return () => {
      window.removeEventListener("scroll", handleEvent);
    };
  }, []);

  // window.addEventListener("scroll", handleScroll);

  let top = window.pageYOffset;

  const body = document.body,
    html = document.documentElement;

  const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  let y;
  // console.log(top);
  // console.log(height);

  // function handleScroll(e, animationEnds) {
  //   // console.log("handleScroll");
  //   window.removeEventListener("scroll", handleScroll);
  //   if (animationEnds) {
  //     setIsOnScroll(false);
  //     window.addEventListener("scroll", handleScroll);
  //   } else {
  //     window.removeEventListener("scroll", handleScroll);
  //     setIsOnScroll(true);
  //     y = 2;
  //     if (window.pageYOffset > top) {
  //       setX(x + y);
  //       top = window.pageYOffset;
  //     } else {
  //       setX(x - y);
  //       top = window.pageYOffset;
  //     }
  //   }
  // }
  // ;
  //   constructor() {
  //     super();
  //     this.state = {
  //       messageList: []
  //     };
  //   };

  //   _onMessageWasSent(message) {
  //     this.setState({
  //       messageList: [...this.state.messageList, message]
  //     })
  //   };

  //   _sendMessage(text) {
  //     if (text.length > 0) {
  //       this.setState({
  //         messageList: [...this.state.messageList, {
  //           author: 'them',
  //           type: 'text',
  //           data: { text }
  //         }]
  //       })
  //     }
  //   };

  return (
    <div className="App">
      <SecHeroe color="white"></SecHeroe>
      <main className="pageWrapper">
        <NavBar></NavBar>
        <SecInfo offsetY={offsetY}></SecInfo>
        {/*<FaceLogo></FaceLogo> */}
        <Launcher
          agentProfile={{
            teamName: "react-chat-window",
            imageUrl: "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
          }}
          // onMessageWasSent={this._onMessageWasSent.bind(this)}
          // messageList={this.state.messageList}
          showEmoji
        />
      </main>
    </div>
  );
}
