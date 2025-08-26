export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: '개인 블로그',
      description: 'Next.js와 TypeScript를 활용하여 만든 개인 블로그입니다. 반응형 디자인과 다크모드를 지원하며, 마크다운으로 포스트를 작성할 수 있습니다.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/Back4Sac2/blog',
      demo: 'https://back4sac2.github.io',
      featured: true
    },
    {
      id: 2,
      title: 'E-커머스 플랫폼',
      description: 'React와 Node.js를 활용한 풀스택 E-커머스 웹 애플리케이션입니다. 결제 시스템, 사용자 인증, 상품 관리 기능을 포함합니다.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      github: 'https://github.com/Back4Sac2/ecommerce',
      demo: 'https://ecommerce-demo.vercel.app',
      featured: true
    },
    {
      id: 3,
      title: '할일 관리 앱',
      description: 'React와 로컬 스토리지를 활용한 할일 관리 애플리케이션입니다. 드래그 앤 드롭으로 태스크를 정리할 수 있습니다.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'TypeScript', 'CSS3', 'LocalStorage'],
      github: 'https://github.com/Back4Sac2/todo-app',
      demo: 'https://todo-app-demo.vercel.app',
      featured: false
    },
    {
      id: 4,
      title: '날씨 앱',
      description: 'OpenWeatherMap API를 활용한 날씨 정보 애플리케이션입니다. 현재 위치 기반 날씨 정보와 7일 예보를 제공합니다.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'JavaScript', 'CSS3', 'OpenWeatherMap API'],
      github: 'https://github.com/Back4Sac2/weather-app',
      demo: 'https://weather-app-demo.vercel.app',
      featured: false
    },
    {
      id: 5,
      title: '포트폴리오 웹사이트',
      description: 'HTML, CSS, JavaScript로 만든 반응형 포트폴리오 웹사이트입니다. 깔끔한 디자인과 부드러운 애니메이션을 특징으로 합니다.',
      image: '/api/placeholder/400/250',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      github: 'https://github.com/Back4Sac2/portfolio',
      demo: 'https://portfolio-demo.vercel.app',
      featured: false
    },
    {
      id: 6,
      title: '채팅 애플리케이션',
      description: 'Socket.io를 활용한 실시간 채팅 애플리케이션입니다. 사용자 간 실시간 메시지 교환과 방 생성 기능을 제공합니다.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'Socket.io', 'Express', 'MongoDB'],
      github: 'https://github.com/Back4Sac2/chat-app',
      demo: 'https://chat-app-demo.vercel.app',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            프로젝트
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            개발 과정에서 배운 것들과 창의적인 아이디어를 구현한 프로젝트들입니다.
            각 프로젝트는 새로운 기술을 학습하고 적용하는 좋은 기회였습니다.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            주요 프로젝트
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
                  <span className="text-6xl text-primary-600 dark:text-primary-400 font-bold">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 dark:bg-gray-700 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary-600 text-white text-center py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    >
                      데모 보기
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            다른 프로젝트들
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <span className="text-4xl text-gray-600 dark:text-gray-400 font-bold">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 dark:bg-gray-700 text-white text-center py-2 px-3 rounded text-sm hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary-600 text-white text-center py-2 px-3 rounded text-sm hover:bg-primary-700 transition-colors duration-200"
                    >
                      데모
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              함께 프로젝트를 만들어요!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              새로운 아이디어나 협업 프로젝트에 관심이 있으시다면 언제든 연락주세요.
              함께 성장하고 배우는 시간이 되었으면 합니다.
            </p>
            <a
              href="mailto:your-email@example.com"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              연락하기
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
