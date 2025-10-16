import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ChatPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <Link href="/analysis">
            <Button variant="ghost" className="text-gray-600">
              ← 戻る
            </Button>
          </Link>
          <h1 className="text-xl font-bold" style={{ color: "#9C27B0" }}>
            AI体調BOT
          </h1>
          <div className="w-16"></div>
        </div>
      </header>

      {/* Main Content (Chat Area) */}
      <main className="flex-1 px-6 py-4 overflow-y-auto">
        <div className="max-w-md mx-auto space-y-4">
          {/* AI Message */}
          <div className="flex justify-start">
            <div className="bg-purple-100 p-3 rounded-lg max-w-[80%] shadow-sm">
              <p className="text-sm text-gray-800">
                こんにちは！あなたの記録データに基づき、体調に関するご相談に乗ります。
              </p>
              <p className="text-xs text-gray-500 mt-1">
                例: 「今日の気圧変化で頭痛が起きるか教えて」「コーラを飲むタイミングは？」
              </p>
            </div>
          </div>

          {/* User Message Placeholder */}
          <div className="flex justify-end">
            <div className="bg-pink-100 p-3 rounded-lg max-w-[80%] shadow-sm">
              <p className="text-sm text-gray-800">
                昨日、頭痛レベル4を記録したけど、何か傾向はある？
              </p>
            </div>
          </div>

          {/* AI Response Placeholder */}
          <div className="flex justify-start">
            <div className="bg-purple-100 p-3 rounded-lg max-w-[80%] shadow-sm">
              <p className="text-sm text-gray-800">
                昨日の記録時、気圧は24時間で-4.5hPaの急降下を示していました。また、その日の午前中に「コーラ渇望」の記録があります。
                <br />
                **インサイト:** あなたの場合、気圧の急降下前に「コーラ渇望」が早期警告サインとして現れる傾向があります。
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="max-w-md mx-auto flex space-x-3">
          <input
            type="text"
            placeholder="AIに相談する..."
            className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:border-purple-500"
          />
          <Button
            className="rounded-full h-12 w-12"
            style={{ background: "#9C27B0", color: "white" }}
          >
            送信
          </Button>
        </div>
      </div>
    </div>
  );
}

