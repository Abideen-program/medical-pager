"use client";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannelListContainer, ChannelContainer } from "../components";

const apiKey = "39qn6nq5us7m";

const client = StreamChat.getInstance(apiKey);

export default function Home() {
  return (
    <main className="flex flex-1 h-full shadow-[0px_1px_4px_0px_rgba(0,0,0,0.33)]">
      <Chat client={client} theme="theme light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </main>
  );
}

//
