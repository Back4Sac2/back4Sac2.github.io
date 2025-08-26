import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            안녕하세요, <span className="text-primary-600 dark:text-primary-400">Back4Sac2</span>입니다
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            개발과 기술에 대한 생각을 나누고, 일상의 소소한 이야기를 담는 개인 블로그입니다.
            함께 성장하고 배우는 공간이 되었으면 합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              블로그 보기
            </Link>
            <Link
              href="/about"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              소개 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            최근 포스트
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Post Cards */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="p-6">
                <div className="text-sm text-primary-600 dark:text-primary-400 mb-2">
                  개발
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Next.js 15 새로운 기능들
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Next.js 15에서 추가된 새로운 기능들과 개선사항들을 살펴보겠습니다.
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  2024년 8월 26일
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="p-6">
                <div className="text-sm text-primary-600 dark:text-primary-400 mb-2">
                  기술
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  TypeScript 고급 타입 활용법
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  TypeScript의 고급 타입 기능들을 활용하여 더 안전한 코드를 작성하는 방법을 알아보겠습니다.
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  2024년 8월 20일
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="p-6">
                <div className="text-sm text-primary-600 dark:text-primary-400 mb-2">
                  일상
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  개발자의 독서 습관
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  개발자로서 지속적인 성장을 위해 독서 습관을 기르는 방법과 추천 도서들을 소개합니다.
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  2024년 8월 15일
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold text-lg"
            >
              모든 포스트 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            기술 스택
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-2">⚛️</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">React</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-2">🚀</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Next.js</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-2">📘</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">TypeScript</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-2">🎨</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Tailwind CSS</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
