"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, X, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { assets } from '@/assets/assets_frontend/assets'

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
  type?: "recommendation" | "text"
  doctorData?: {
    name: string
    specialty: string
    image: string
  }
}

export function HealthChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initialize chat with greeting when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "1",
          content:
            "Welcome to HealthChat! I can help you book appointments with our specialists. How can I assist you today?",
          role: "assistant",
          type: "text",
        },
      ])
    }
  }, [isOpen, messages.length])

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Process the user's message and determine the response
      const response = await processUserMessage(input)
      setMessages((prev) => [...prev, response])
    } catch (error) {
      console.error("Error processing message:", error)
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          content: "I'm sorry, I encountered an error. Please try again.",
          role: "assistant",
          type: "text",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

const processUserMessage = async (message: string): Promise<Message> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("headache") || lowerMessage.includes("migraine")) {
    return {
      id: Date.now().toString(),
      content: "Based on your headache symptoms, I recommend seeing a neurologist.",
      role: "assistant",
      type: "recommendation",
      doctorData: {
        name: "Dr. Jennifer Garcia",
        specialty: "Neurologist",
        image: "/placeholder.svg?height=80&width=80",
      },
    };
  } else if (lowerMessage.includes("skin") || lowerMessage.includes("rash") || lowerMessage.includes("acne")) {
    return {
      id: Date.now().toString(),
      content: "For your skin condition, I recommend consulting a dermatologist.",
      role: "assistant",
      type: "recommendation",
      doctorData: {
        name: "Dr. Sarah Pate",
        specialty: "Dermatologist",
        image: "/placeholder.svg?height=80&width=80",
      },
    };
  } else if (lowerMessage.includes("child") || lowerMessage.includes("kid") || lowerMessage.includes("baby") || lowerMessage.includes("pediatrician")) {
    return {
      id: Date.now().toString(),
      content: "For your child's health needs, I recommend seeing a pediatrician.",
      role: "assistant",
      type: "recommendation",
      doctorData: {
        name: "Dr. Christopher Lee",
        specialty: "Pediatrician",
        image: "/placeholder.svg?height=80&width=80",
      },
    };
  } else if (lowerMessage.includes("heart") || lowerMessage.includes("chest pain") || lowerMessage.includes("cardiac")) {
    return {
      id: Date.now().toString(),
      content: "For heart-related concerns, I recommend consulting a cardiologist.",
      role: "assistant",
      type: "recommendation",
      doctorData: {
        name: "Dr. Arvind Nair",
        specialty: "Cardiologist",
        image: "/placeholder.svg?height=80&width=80",
      },
    };
  } else if (lowerMessage.includes("joint") || lowerMessage.includes("bone") || lowerMessage.includes("knee") || lowerMessage.includes("back pain")) {
    return {
      id: Date.now().toString(),
      content: "For your joint or bone-related issues, I recommend seeing an orthopedist.",
      role: "assistant",
      type: "recommendation",
      doctorData: {
        name: "Dr. Meera Kapoor",
        specialty: "Orthopedist",
        image: "/placeholder.svg?height=80&width=80",
      },
    };
  } else if (lowerMessage.includes("eyes") || lowerMessage.includes("vision") || lowerMessage.includes("blurry")) {
    return {
      id: Date.now().toString(),
      content: "For vision-related problems, I suggest seeing an ophthalmologist.",
      role: "assistant",
      type: "recommendation",
      doctorData: {
        name: "Dr. Sanjay Rao",
        specialty: "Ophthalmologist",
        image: "/placeholder.svg?height=80&width=80",
      },
    };
  } else if (lowerMessage.includes("teeth") || lowerMessage.includes("tooth") || lowerMessage.includes("gum")) {
    return {
      id: Date.now().toString(),
      content: "For dental concerns, I recommend consulting a dentist.",
      role: "assistant",
      type: "recommendation",
      doctorData: {
        name: "Dr. Priya Desai",
        specialty: "Dentist",
        image: "/placeholder.svg?height=80&width=80",
      },
    };
  } else if (lowerMessage.includes("mental") || lowerMessage.includes("stress") || lowerMessage.includes("depression") || lowerMessage.includes("anxiety")) {
    return {
      id: Date.now().toString(),
      content: "For mental health support, I recommend a psychiatrist.",
      role: "assistant",
      type: "recommendation",
      doctorData: {
        name: "Dr. Kabir Malhotra",
        specialty: "Psychiatrist",
        image: "/placeholder.svg?height=80&width=80",
      },
    };
  } else if (lowerMessage.includes("stomach") || lowerMessage.includes("abdomen") || lowerMessage.includes("digestion")) {
    return {
      id: Date.now().toString(),
      content: "For digestive issues, please consult a gastroenterologist.",
      role: "assistant",
      type: "recommendation",
      doctorData: {
        name: "Dr. Reema Singh",
        specialty: "Gastroenterologist",
        image: "/placeholder.svg?height=80&width=80",
      },
    };
  } else if (lowerMessage.includes("lungs") || lowerMessage.includes("breathing") || lowerMessage.includes("asthma")) {
    return {
      id: Date.now().toString(),
      content: "For respiratory issues, I suggest seeing a pulmonologist.",
      role: "assistant",
      type: "recommendation",
      doctorData: {
        name: "Dr. Anurag Joshi",
        specialty: "Pulmonologist",
        image: "/placeholder.svg?height=80&width=80",
      },
    };
  } else if (lowerMessage.includes("pregnancy") || lowerMessage.includes("gynecology") || lowerMessage.includes("period")) {
    return {
      id: Date.now().toString(),
      content: "For gynecological concerns, I recommend seeing an obstetrician-gynecologist.",
      role: "assistant",
      type: "recommendation",
      doctorData: {
        name: "Dr. Emily Larson",
        specialty: "Obstetrician-Gynecologist",
        image: "/placeholder.svg?height=80&width=80",
      },
    };
  } else if (lowerMessage.includes("allergy") || lowerMessage.includes("sneeze") || lowerMessage.includes("itching")) {
    return {
      id: Date.now().toString(),
      content: "For allergic reactions, I recommend an allergist.",
      role: "assistant",
      type: "recommendation",
      doctorData: {
        name: "Dr. Nikhil Bansal",
        specialty: "Allergist",
        image: "/placeholder.svg?height=80&width=80",
      },
    };
  } else if (lowerMessage.includes("thyroid") || lowerMessage.includes("diabetes") || lowerMessage.includes("hormone")) {
    return {
      id: Date.now().toString(),
      content: "For hormone-related issues, please see an endocrinologist.",
      role: "assistant",
      type: "recommendation",
      doctorData: {
        name: "Dr. Sheetal Kulkarni",
        specialty: "Endocrinologist",
        image: "/placeholder.svg?height=80&width=80",
      },
    };
  } else if (lowerMessage.includes("infection") || lowerMessage.includes("fever") || lowerMessage.includes("flu")) {
    return {
      id: Date.now().toString(),
      content: "For infectious diseases, I recommend consulting a general physician.",
      role: "assistant",
      type: "recommendation",
      doctorData: {
        name: 'Dr. Richard James',
        specialty: "General Physician",
        image: "/placeholder.svg?height=80&width=80",
      },
    };
  } else if (lowerMessage.includes("urine") || lowerMessage.includes("bladder") || lowerMessage.includes("kidney")) {
    return {
      id: Date.now().toString(),
      content: "For urinary or kidney concerns, see a urologist.",
      role: "assistant",
      type: "recommendation",
      doctorData: {
        name: "Dr. Swati Sharma",
        specialty: "Urologist",
        image: "/placeholder.svg?height=80&width=80",
      },
    };
  } else {
    return {
      id: Date.now().toString(),
      content: "I'd be happy to help you find the right specialist. Could you please describe your medical concern in more detail?",
      role: "assistant",
      type: "text",
    };
  }
};


  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat button */}
      <Button onClick={() => setIsOpen(true)} className="fixed bottom-4 right-4 rounded-full p-4 shadow-lg" size="icon">
        <MessageSquare className="h-6 w-6" />
      </Button>

      {/* Chat interface */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex items-end justify-center sm:items-center",
          isOpen ? "visible" : "invisible",
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "fixed inset-0 bg-black/40 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* Chat card */}
        <Card
          className={cn(
            "w-full max-w-md h-[80vh] sm:h-[600px] flex flex-col relative z-50 transition-all duration-300 bg-white",
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95",
          )}
        >
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <img src={assets.General_physician.src}  alt="HC" className="h-full w-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold">Healthcare Assistant</h3>
                <p className="text-xs text-muted-foreground">Welcome to HealthChat</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => {
              if (message.type === "recommendation" && message.doctorData) {
                return (
                  <div key={message.id} className="flex flex-col gap-2">
                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <img src={assets.General_physician.src} alt="Assistant" />
                      </Avatar>
                      <div className="rounded-lg px-4 py-2 max-w-[80%] bg-muted">
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>

                    <Card className="p-4 ml-11 max-w-[90%]">
                      <div className="flex gap-4 items-center">
                        <Avatar className="h-16 w-16">
                          <img src={assets.General_physician.src || "/placeholder.svg"} alt={message.doctorData.name} />
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-semibold">{message.doctorData.name}</h4>
                          <p className="text-sm text-muted-foreground">{message.doctorData.specialty}</p>
                          <Button size="sm" className="mt-2">
                            Book Appointment
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                )
              } else {
                return (
                  <div
                    key={message.id}
                    className={cn("flex gap-3", message.role === "user" ? "justify-end" : "justify-start")}
                  >
                    {message.role === "assistant" && (
                      <Avatar className="h-8 w-8">
                        <img src={assets.General_physician.src} alt="Assistant" />
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        "rounded-lg px-4 py-2 max-w-[80%]",
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
                      )}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                    {message.role === "user" && (
                      <Avatar className="h-8 w-8">
                        <img src={assets.Dermatologist.src} alt="User" />
                      </Avatar>
                    )}
                  </div>
                )
              }
            })}
            {isLoading && (
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-gray-300 animate-bounce"></div>
                <div className="h-3 w-3 rounded-full bg-gray-300 animate-bounce delay-100"></div>
                <div className="h-3 w-3 rounded-full bg-gray-300 animate-bounce delay-200"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}
