"use client"

import { useEffect, useRef, useState } from "react"
import axios from "axios"
import io from "socket.io-client"
import { Send, Smile, Search, MessageCircle } from "lucide-react"

const socket = io(`${ process.env.NEXT_PUBLIC_BACKEND_URL }`) // Update for prod

export default function ChatPage() {
  const [conversations, setConversations] = useState<any[]>([])
  const [selectedConversation, setSelectedConversation] = useState<any>(null)
  const [messages, setMessages] = useState<any[]>([])
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userId = localStorage.getItem("userId")
      setUserId(userId)
    }
  }, [])

  useEffect(() => {
    if (userId) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/chat/conversations?userId=${userId}&role=user`)
        .then((res) => {
          setConversations(res.data)
          setSelectedConversation(res.data[0])
        })
        .catch(console.error)
    }
  }, [userId])

  useEffect(() => {
    if (!selectedConversation) return

    socket.emit("register", { userId: userId })

    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/chat/messages/${selectedConversation._id}`)
      .then((res) => setMessages(res.data.messages))

    socket.on("receiveMessage", (msg) => {
      if (msg.conversationId === selectedConversation._id) {
        setMessages((prev) => [...prev, msg])
      }
    })
    return () => {
      socket.off("receiveMessage")
    }
  }, [selectedConversation])

  const sendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return

    socket.emit("sendMessage", {
      conversationId: selectedConversation._id,
      senderId: userId,
      receiverId: selectedConversation.doctor,
      senderType: "user",
      text: newMessage,
    })

    setNewMessage("")
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const getMessageDate = (timestamp: string) => {
    const date = new Date(timestamp)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.toDateString() === today.toDateString()) {
      return "Today"
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday"
    } else {
      return date.toLocaleDateString()
    }
  }

  return (
    <div className="flex h-[calc(100vh-64px)] bg-gray-50">
      {/* Conversation List - Left Panel */}
      <div className="w-1/3 flex flex-col border-r border-gray-200 bg-white">
        <div className="p-4 bg-gray-100 text-gray-800">
          <h2 className="text-xl font-semibold">Messages</h2>
        </div>

        <div className="px-3 py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search conversations"
              className="w-full py-2 pl-10 pr-4 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Search conversations"
            />
            <Search size={18} className="absolute left-3 top-2.5 text-gray-500" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {conversations &&
            conversations.map((conv) => (
              <div
                key={conv._id}
                className={`flex items-center p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors ${
                  selectedConversation?._id === conv._id ? "bg-gray-100" : ""
                }`}
                onClick={() => setSelectedConversation(conv)}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0 border">
                  <img
                    src={
                      conv.other.image ||
                      `https://ui-avatars.com/api/?name=${conv.other.name}&background=ccc&color=333`
                    }
                    alt={`${conv.other.name}'s avatar`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium text-gray-900 truncate">{conv.other.name}</h3>
                    <span className="text-xs text-gray-500">
                      {conv.lastMessage?.createdAt ? formatTime(conv.lastMessage.createdAt) : ""}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{conv.lastMessage?.text || "Start a conversation"}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Chat Window - Right Panel */}
      <div className="flex-1 flex flex-col bg-gray-100 relative">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200 text-gray-900 shadow-sm">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border">
                  <img
                    src={
                      selectedConversation.other.image ||
                      `https://ui-avatars.com/api/?name=${selectedConversation.other.name}&background=ccc&color=333`
                    }
                    alt={`${selectedConversation.other.name}'s avatar`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{selectedConversation.other.name}</h3>
                  <p className="text-xs text-gray-500">online</p>
                </div>
              </div>
              <button
                className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Search in conversation"
              >
                <Search size={20} />
              </button>
            </div>

            {/* Chat Messages Area */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 bg-gray-100"
              style={{ scrollbarWidth: "thin" }}
            >
              {messages.length > 0 && (
                <div className="flex justify-center mb-4">
                  <div className="bg-white px-3 py-1 rounded-lg text-xs text-gray-500 shadow-sm">
                    {getMessageDate(messages[0].createdAt)}
                  </div>
                </div>
              )}

              {messages.map((msg, index) => {
                const isCurrentUser = msg.senderId === userId
                const showDate =
                  index > 0 && getMessageDate(msg.createdAt) !== getMessageDate(messages[index - 1].createdAt)

                return (
                  <div key={msg._id || index}>
                    {showDate && (
                      <div className="flex justify-center my-4">
                        <div className="bg-white px-3 py-1 rounded-lg text-xs text-gray-500 shadow-sm">
                          {getMessageDate(msg.createdAt)}
                        </div>
                      </div>
                    )}

                    <div className={`flex ${isCurrentUser ? "justify-end" : "justify-start"} mb-3`}>
                      <div
                        className={`relative max-w-[65%] px-4 py-3 rounded-2xl shadow-sm ${
                          isCurrentUser
                            ? "bg-gray-200 text-gray-900 rounded-br-none"
                            : "bg-white text-gray-800 rounded-bl-none"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap break-words">{msg.text}</p>
                        <div
                          className={`text-[11px] ${
                            isCurrentUser ? "text-gray-500" : "text-gray-400"
                          } text-right mt-1`}
                        >
                          {formatTime(msg.createdAt)}
                          {isCurrentUser && <span className="ml-1">✓</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input Area */}
            <div className="p-3 bg-white border-t border-gray-200 flex items-center space-x-2">
              <button
                className="p-2 text-gray-500 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Add emoji"
              >
                <Smile size={24} />
              </button>
              <div className="flex-1 bg-gray-100 rounded-full">
                <input
                  className="w-full px-4 py-3 bg-transparent focus:outline-none text-gray-800 rounded-full"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type a message"
                  aria-label="Type a message"
                />
              </div>
              <button
                onClick={sendMessage}
                disabled={!newMessage.trim()}
                aria-label="Send message"
                className={`p-3 rounded-full transition-colors ${
                  newMessage.trim()
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "text-gray-400 bg-gray-100"
                }`}
              >
                <Send size={20} />
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-center text-gray-500 p-6 bg-white rounded-lg shadow-md">
              <MessageCircle size={48} className="mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No conversation selected</h3>
              <p className="mb-2">Select a conversation to start chatting</p>
              <p className="text-sm">Your messages will appear here</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}