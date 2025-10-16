import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)" }}>
      {/* Header */}
      <header className="p-6">
        <h1 className="text-2xl font-bold" style={{ color: "#9C27B0" }}>
          気圧病記録アプリ
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
	            <h2 className="text-3xl font-bold mb-4" style={{ color: "#9C27B0" }}>
	              気圧病の備忘録アプリ
	            </h2>
	            <p className="text-gray-700 mb-8">
	              **ワンタップで自分の状態を記録**し、気圧データと突き合わせることで、あなただけの体調の傾向（パターン）を見つけます。
	            </p>
          </div>

          {/* Quick Record Button */}
          <Link href="/record">
            <Button
              className="w-full py-6 text-lg font-bold"
              style={{ background: "#9C27B0", color: "white" }}
            >
              体調を記録する
            </Button>
          </Link>

          {/* Analysis Button */}
          <Link href="/analysis">
            <Button
              variant="outline"
              className="w-full py-6 text-lg font-bold"
              style={{ borderColor: "#EC407A", color: "#EC407A" }}
            >
              分析を見る
            </Button>
          </Link>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 py-4">
        <div className="flex justify-around max-w-md mx-auto">
          <Link href="/">
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-1" style={{ color: "#9C27B0" }}>🏠</div>
              <span className="text-xs" style={{ color: "#9C27B0" }}>ホーム</span>
            </div>
          </Link>
          <Link href="/record">
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-1" style={{ color: "#666" }}>✏️</div>
              <span className="text-xs text-gray-600">記録</span>
            </div>
          </Link>
          <Link href="/analysis">
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-1" style={{ color: "#666" }}>📊</div>
              <span className="text-xs text-gray-600">分析</span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}
