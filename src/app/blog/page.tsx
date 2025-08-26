export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Next.js 15 새로운 기능들',
      excerpt: 'Next.js 15에서 추가된 새로운 기능들과 개선사항들을 살펴보겠습니다. App Router의 향상된 성능과 새로운 개발자 경험에 대해 알아보세요.',
      category: '개발',
      date: '2024년 8월 26일',
      readTime: '5분',
      tags: ['Next.js', 'React', '웹개발']
    },
    {
      id: 2,
      title: 'TypeScript 고급 타입 활용법',
      excerpt: 'TypeScript의 고급 타입 기능들을 활용하여 더 안전한 코드를 작성하는 방법을 알아보겠습니다. 제네릭, 유니온 타입, 인터섹션 타입 등을 다룹니다.',
      category: '기술',
      date: '2024년 8월 20일',
      readTime: '8분',
      tags: ['TypeScript', '타입시스템', '프로그래밍']
    },
    {
      id: 3,
      title: '개발자의 독서 습관',
      excerpt: '개발자로서 지속적인 성장을 위해 독서 습관을 기르는 방법과 추천 도서들을 소개합니다. 기술서부터 인문학까지 다양한 분야의 책을 추천합니다.',
      category: '일상',
      date: '2024년 8월 15일',
      readTime: '6분',
      tags: ['독서', '성장', '개발자']
    },
    {
      id: 4,
      title: 'Tailwind CSS로 모던한 UI 만들기',
      excerpt: 'Tailwind CSS를 활용하여 모던하고 반응형인 UI를 만드는 방법과 팁들을 공유합니다. 유틸리티 퍼스트 접근법의 장점을 살펴보세요.',
      category: '프론트엔드',
      date: '2024년 8월 10일',
      readTime: '7분',
      tags: ['Tailwind CSS', 'CSS', 'UI/UX']
    },
    {
      id: 5,
      title: 'React 19의 새로운 기능들',
      excerpt: 'React 19에서 도입된 새로운 기능들과 개선사항들을 미리 살펴보겠습니다. Concurrent Features와 새로운 훅들에 대해 알아보세요.',
      category: '개발',
      date: '2024년 8월 5일',
      readTime: '6분',
      tags: ['React', 'JavaScript', '프론트엔드']
    },
    {
      id: 6,
      title: '개발자의 시간 관리법',
      excerpt: '바쁜 개발 업무 속에서 효율적으로 시간을 관리하고 생산성을 높이는 방법들을 공유합니다. 우선순위 설정과 집중력 향상 팁을 다룹니다.',
      category: '생산성',
      date: '2024년 7월 30일',
      readTime: '9분',
      tags: ['시간관리', '생산성', '개발자']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            블로그
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            개발과 기술, 일상에 대한 생각들을 나누는 공간입니다.
            함께 배우고 성장하는 시간이 되었으면 합니다.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium">
            전체
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            개발
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            기술
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            일상
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            프론트엔드
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            생산성
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200">
            더 많은 포스트 보기
          </button>
        </div>
      </div>
    </div>
  );
}
