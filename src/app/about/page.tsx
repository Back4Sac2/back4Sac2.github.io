export default function AboutPage() {
  const skills = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'Next.js', level: 85, category: 'Frontend' },
    { name: 'TypeScript', level: 80, category: 'Language' },
    { name: 'JavaScript', level: 90, category: 'Language' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'Python', level: 70, category: 'Language' },
    { name: 'Tailwind CSS', level: 85, category: 'Styling' },
    { name: 'Git', level: 80, category: 'Tools' },
  ];

  const experiences = [
    {
      year: '2024',
      title: '풀스택 개발자',
      company: '테크 스타트업',
      description: 'React, Next.js, Node.js를 활용한 웹 애플리케이션 개발'
    },
    {
      year: '2023',
      title: '프론트엔드 개발자',
      company: '웹 에이전시',
      description: '다양한 클라이언트의 웹사이트 및 웹 애플리케이션 개발'
    },
    {
      year: '2022',
      title: '주니어 개발자',
      company: '소프트웨어 회사',
      description: 'JavaScript와 React를 활용한 사용자 인터페이스 개발'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            안녕하세요, Back4Sac2입니다
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            개발과 기술에 대한 열정을 가지고 있는 풀스택 개발자입니다.
            사용자 경험을 중요하게 생각하며, 깔끔하고 효율적인 코드 작성을 지향합니다.
          </p>
        </div>

        {/* Profile Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                프로필
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">이름</h3>
                  <p className="text-gray-600 dark:text-gray-300">Back4Sac2</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">직업</h3>
                  <p className="text-gray-600 dark:text-gray-300">풀스택 개발자</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">지역</h3>
                  <p className="text-gray-600 dark:text-gray-300">서울, 대한민국</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">관심 분야</h3>
                  <p className="text-gray-600 dark:text-gray-300">웹 개발, 모바일 앱, 인공지능, 클라우드</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-6xl text-white font-bold">B</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                개발자로서의 성장과 학습을 즐기며,<br />
                새로운 기술에 대한 호기심이 많습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            기술 스택
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['Frontend', 'Backend', 'Language', 'Styling', 'Tools'].map((category) => (
              <div key={category}>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            경력
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 font-bold text-lg">
                      {exp.year}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            연락처
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            궁금한 점이 있거나 함께 일하고 싶으시다면 언제든 연락주세요.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Back4Sac2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="mailto:your-email@example.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <span className="sr-only">Email</span>
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
