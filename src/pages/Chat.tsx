
import { useState } from "react";
import { SendHorizontal, User2, Info } from "lucide-react";
import MainSidebar from "../components/MainSidebar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "I am your audience analyst. I can answer questions about the people who have responded to your survey. What do you want to know?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [questionCount, setQuestionCount] = useState(0);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    // Increment question count
    const newQuestionCount = questionCount + 1;
    setQuestionCount(newQuestionCount);

    // Simulate assistant response based on question number
    setTimeout(() => {
      const assistantResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: newQuestionCount === 1 
          ? 'Respondents who mentioned terms related to "holiday" tend to have a high score in Openness (80 out of 100) . People with high trait Openness tend to be more willing to engage in new experiences and new perspectives'
          : 'Communicating with words on wordset A may target the high-openness trait of these folk, possibly exciting them with the potential of new experiences',
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantResponse]);
    }, 1000);
  };

  const renderMessage = (message: Message) => {
    if (message.sender === "assistant" && message.content.includes("(80 out of 100)")) {
      const parts = message.content.split("(80 out of 100)");
      return (
        <>
          {parts[0]}
          <span>(80 out of 100</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <sup className="text-blue-400 cursor-help">
                  <Info className="w-3 h-3 inline" />
                </sup>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-gray-700 text-white p-3 max-w-xs">
                <p>Openness reflects a person's willingness to try new experiences, engage with abstract concepts, and explore novel ideas. High scorers tend to be creative, curious, and appreciative of art and nature.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <span>)</span>
          {parts[1]}
        </>
      );
    }
    return message.content;
  };

  return (
    <div className="h-screen bg-gray-950 font-grotesk text-[13px]">
      <MainSidebar />
      
      <div className="transition-all duration-300 md:ml-[208px] md:collapsed:ml-16 h-full flex flex-col">
        {/* Header */}
        <div className="border-b border-gray-800 p-4">
          <h1 className="text-white text-lg font-medium">Chat with Audience</h1>
          <p className="text-gray-400 text-xs mt-0.5">
            Ask questions about your audience data and get AI-powered insights
          </p>
          
          <div className="mt-2 text-[11px] text-gray-400 flex items-center flex-wrap gap-1.5">
            <span>Chatting with</span>
            <span className="px-2 py-0.5 bg-gray-800 rounded-full text-gray-300">450 of 10000</span>
            <span>respondents relevant to the term</span>
            <span className="text-blue-400">"holiday"</span>
          </div>
        </div>

        {/* Chat Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex items-start gap-2 max-w-[80%] ${
                    message.sender === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Avatar className="h-7 w-7">
                    {message.sender === "user" ? (
                      <User2 className="h-4 w-4 text-gray-400" />
                    ) : (
                      <AvatarImage src="/placeholder.svg" />
                    )}
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div
                    className={`rounded-lg p-2 text-sm text-left ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-gray-100"
                    }`}
                  >
                    {renderMessage(message)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t border-gray-800 py-4 px-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Ask about your audience..."
              className="flex-1 bg-gray-900 text-white rounded-lg px-3 py-2 text-sm border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Button
              onClick={handleSendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <SendHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
