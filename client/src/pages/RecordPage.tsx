import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function RecordPage() {
  const [, setLocation] = useLocation();
  const [selectedSymptoms, setSelectedSymptoms] = useState<Record<string, number>>({});
  const [showSlider, setShowSlider] = useState<string | null>(null);

  const symptoms = [
    { id: "headache", label: "頭痛", icon: "🤕" },
    { id: "sleepiness", label: "眠気", icon: "😴" },
    { id: "tinnitus", label: "耳鳴り", icon: "👂" },
    { id: "bowel", label: "便通", icon: "🚽" },
    { id: "appetite", label: "食欲", icon: "🍽️" },
    { id: "cola", label: "コーラ", icon: "🥤" },
  ];

  const handleSymptomClick = (symptomId: string) => {
    if (symptomId === "cola") {
      // Boolean input for cola
      setSelectedSymptoms({ ...selectedSymptoms, [symptomId]: 1 });
    } else {
      // Default intensity for quick record
      setSelectedSymptoms({ ...selectedSymptoms, [symptomId]: 3 });
    }
  };

  const handleSymptomLongPress = (symptomId: string) => {
    setShowSlider(symptomId);
  };

  const handleSliderChange = (symptomId: string, value: number) => {
    setSelectedSymptoms({ ...selectedSymptoms, [symptomId]: value });
  };

  const handleComplete = () => {
    // Mock: Save record
    alert("記録を保存しました！");
    setLocation("/");
  };

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
            体調を記録
          </h1>
          <div className="w-16"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <div className="max-w-md mx-auto">
          <p className="text-sm text-gray-600 mb-6 text-center">
            症状をタップすると、デフォルトの強度（3/5）で記録されます。
            <br />
            詳細な強度を入力したい場合は、長押ししてください。
          </p>

          {/* Symptom Icons */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {symptoms.map((symptom) => (
              <div key={symptom.id} className="flex flex-col items-center">
                <button
                  onClick={() => handleSymptomClick(symptom.id)}
                  onMouseDown={() => {
                    const timer = setTimeout(() => handleSymptomLongPress(symptom.id), 500);
                    return () => clearTimeout(timer);
                  }}
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl transition-all ${
                    selectedSymptoms[symptom.id]
                      ? "bg-purple-100 ring-4 ring-purple-300"
                      : "bg-white border-2 border-gray-200"
                  }`}
                >
                  {symptom.icon}
                </button>
                <span className="text-sm mt-2 text-gray-700">{symptom.label}</span>
                {selectedSymptoms[symptom.id] && symptom.id !== "cola" && (
                  <span className="text-xs text-purple-600 font-bold">
                    {selectedSymptoms[symptom.id]}/5
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Slider for detailed input */}
          {showSlider && showSlider !== "cola" && (
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4" style={{ color: "#9C27B0" }}>
                強度を選択
              </h3>
              <input
                type="range"
                min="0"
                max="5"
                value={selectedSymptoms[showSlider] || 3}
                onChange={(e) => handleSliderChange(showSlider, parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>0 (なし)</span>
                <span>5 (非常に強い)</span>
              </div>
              <Button
                onClick={() => setShowSlider(null)}
                className="w-full mt-4"
                style={{ background: "#9C27B0", color: "white" }}
              >
                確定
              </Button>
            </div>
          )}

          {/* Medication and Notes */}
          <div className="space-y-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                服薬（任意）
              </label>
              <input
                type="text"
                placeholder="例: ロキソニン 1錠"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                メモ（任意）
              </label>
              <textarea
                placeholder="気になることがあれば記録してください"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                rows={3}
              />
            </div>
          </div>

          {/* Complete Button */}
          <Button
            onClick={handleComplete}
            className="w-full py-6 text-lg font-bold"
            style={{ background: "#9C27B0", color: "white" }}
          >
            記録を完了
          </Button>
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
              <div className="text-2xl mb-1" style={{ color: "#9C27B0" }}>✏️</div>
              <span className="text-xs" style={{ color: "#9C27B0" }}>記録</span>
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

