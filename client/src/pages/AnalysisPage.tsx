import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "wouter";

export default function AnalysisPage() {
  const [showWeatherDetail, setShowWeatherDetail] = useState(false);

  // Mock data for demonstration
  const mockPressureData = [
    { time: "00:00", pressure: 1015 },
    { time: "03:00", pressure: 1013 },
    { time: "06:00", pressure: 1010 },
    { time: "09:00", pressure: 1008 },
    { time: "12:00", pressure: 1012 },
    { time: "15:00", pressure: 1016 },
    { time: "18:00", pressure: 1018 },
    { time: "21:00", pressure: 1020 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <Link href="/">
            <Button variant="ghost" className="text-gray-600">
              ← 戻る
            </Button>
          </Link>
          <h1 className="text-xl font-bold" style={{ color: "#9C27B0" }}>
            分析
          </h1>
          <div className="w-16"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <div className="max-w-md mx-auto space-y-6">
          {/* Pressure Forecast Graph */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold" style={{ color: "#9C27B0" }}>
                気圧予報
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowWeatherDetail(!showWeatherDetail)}
                style={{ color: "#EC407A" }}
              >
                {showWeatherDetail ? "詳細を隠す" : "詳細を表示"}
              </Button>
            </div>

            {/* Simple Pressure Graph */}
            <div className="relative h-40 border-l-2 border-b-2 border-gray-300">
              <div className="absolute inset-0 flex items-end justify-around pb-2 pl-2">
                {mockPressureData.map((data, index) => {
                  const height = ((data.pressure - 1005) / 20) * 100;
                  const isLow = data.pressure < 1010;
                  return (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div
                        className={`w-full ${isLow ? "bg-red-400" : "bg-blue-400"} rounded-t`}
                        style={{ height: `${height}%` }}
                      ></div>
                      <span className="text-xs text-gray-600 mt-1">{data.time}</span>
                    </div>
                  );
                })}
              </div>
              {/* Warning indicator */}
              <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                ⚠️ 注意
              </div>
            </div>

            {/* Weather Detail (collapsible) */}
            {showWeatherDetail && (
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">気温:</span>
                  <span className="font-medium">18°C</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">湿度:</span>
                  <span className="font-medium">65%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">天気:</span>
                  <span className="font-medium">曇り</span>
                </div>
              </div>
            )}
          </div>

          {/* Correlation Graph */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4" style={{ color: "#9C27B0" }}>
              複合相関グラフ
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              気圧変化率 vs 頭痛強度
            </p>
            {/* Placeholder for correlation graph */}
            <div className="h-48 bg-gradient-to-br from-purple-50 to-pink-50 rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm">
                データが蓄積されると、相関グラフが表示されます
              </span>
            </div>
          </div>

          {/* Personalized Insights */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4" style={{ color: "#9C27B0" }}>
              パーソナライズされたインサイト
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">💡</span>
                  <div>
                    <h3 className="font-bold text-sm mb-1" style={{ color: "#9C27B0" }}>
                      コーラ渇望が早期警告サインかも
                    </h3>
                    <p className="text-sm text-gray-700">
                      過去のデータから、コーラを飲みたくなった2〜3時間後に頭痛が発生する傾向が見られます。
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-pink-50 rounded-lg">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">😴</span>
                  <div>
                    <h3 className="font-bold text-sm mb-1" style={{ color: "#EC407A" }}>
                      睡眠不足が症状を悪化させる可能性
                    </h3>
                    <p className="text-sm text-gray-700">
                      睡眠時間が6時間未満の翌日は、気圧変動時の症状が強く出る傾向があります。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 py-4">
        <div className="flex justify-around max-w-md mx-auto">
          <Link href="/">
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-1" style={{ color: "#666" }}>🏠</div>
              <span className="text-xs text-gray-600">ホーム</span>
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
              <div className="text-2xl mb-1" style={{ color: "#9C27B0" }}>📊</div>
              <span className="text-xs" style={{ color: "#9C27B0" }}>分析</span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

