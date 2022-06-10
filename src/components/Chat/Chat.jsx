import React, { Component } from "react";
import { Launcher } from "react-chat-window";
import { ButtonsStateContext } from "../../contexts/ButtonsStateContext";

import "./Chat.scss";

export default class Chat extends Component {
  static contextType = ButtonsStateContext;

  constructor() {
    super();
    this.state = {
      messageList: [],
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message],
    });
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [
          ...this.state.messageList,
          {
            author: "them",
            type: "text",
            data: { text },
          },
        ],
      });
    }
  }

  render() {
    const { showChat, setShowChat } = this.context;
    return (
      <div>
        <Launcher
          agentProfile={{
            teamName: "littlessentials support",
            imageUrl: "../assets/logomark-light.svg",
          }}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={[
            {
              author: "them",
              type: "text",
              data: { text: "How can we help you?" },
            },
            ...this.state.messageList,
          ]}
          showEmoji
          handleClick={() => setShowChat(!showChat)}
          isOpen={showChat}
        />
      </div>
    );
  }
}
