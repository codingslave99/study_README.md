export default function Home() {
  return (
    <div>
      {/* Hero 섹션 */}
      <section className="text-center py-20 border-b bg-blue-100">
        <h1 className="text-xl md:text-5xl font-bold mb-4">
          안녕하세요
        </h1>
        <p className="text-gray-500 mb-6">
          금붕어의 첫 번째 Next.js 페이지입니다.
        </p>
        <button className="group bg-cyan-800 text-white
          px-6 py-2 rounded hover:bg-gray-700 transition-colors">
          <span className="group-hover:hidden">시작하기</span>
          <span className="hidden group-hover:inline">금붕어 탈출하기</span>
        </button>
      </section>

      {/* 카드 섹션 */}
      <section className="py-16 px-6">
        <h2 className="text-center md:text-3xl font-bold mb-8">
          Main Content
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="border rounded-lg p-6
            text-center bg-blue-100">
            <h3 className="font-bold mb-2">카드 1</h3>
            <p className="text-sm text-gray-500">
              Next.js
            </p>
          </div>
          <div className="border rounded-lg p-6
            text-center bg-blue-100">
            <h3 className="font-bold mb-2">카드 2</h3>
            <p className="text-sm text-gray-500">
              Tailwind CSS
            </p>
          </div>
          <div className="border rounded-lg p-6
            text-center bg-blue-100">
            <h3 className="font-bold mb-2">카드 3</h3>
            <p className="text-sm text-gray-500">
              컴포넌트
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}