export const services = [
  {
    title: '전환 중심 랜딩 페이지',
    description: '서비스 이해, 신뢰 형성, 상담 신청까지의 흐름을 한 화면 안에서 설계합니다.',
    proof: 'CTA 클릭률과 폼 진입률을 핵심 지표로 추적',
  },
  {
    title: '포트폴리오 및 브랜드 사이트',
    description: '작업물 나열을 넘어 문제, 전략, 결과가 보이는 사례 구조를 만듭니다.',
    proof: '프로젝트별 KPI와 적용 원리까지 함께 제시',
  },
  {
    title: '제품 UX 진단 및 개선',
    description: '탐색 흐름, 메시지 위계, 입력 부담을 점검해 사용자의 다음 행동을 선명하게 만듭니다.',
    proof: '이탈 구간과 행동 유도 요소를 함께 개선',
  },
];

export const problemCards = [
  {
    number: '1.',
    title: '전문성은 보이지만 문의가 적습니다',
    description: '포트폴리오가 작업물 중심으로만 구성되면 방문자는 좋은 결과를 봐도 다음 행동으로 이어질 이유를 찾기 어렵습니다.',
  },
  {
    number: '2.',
    title: '차별점이 일반 에이전시와 섞입니다',
    description: '넛지 디자인, 성과 중심 설계, 프로젝트 관리 역량이 한 문장으로 정리되지 않으면 기억에 남지 않습니다.',
  },
  {
    number: '3.',
    title: '상담 전환 지점이 늦게 나옵니다',
    description: '확신이 생긴 순간 CTA가 보이지 않으면 사용자는 탐색을 끝내고 떠납니다.',
  },
];

export const nudgeStorySteps = [
  {
    label: 'Before',
    title: '방문자는\n무엇을 해야할 지\n모릅니다.',
    detail: '뭔가 그럴듯하지만 어떤 동작을 해야할 지 몰라 홈페이지 이탈이 늘어납니다.',
    metric: 'Before',
  },
  {
    label: 'Nudge',
    title: '다음 단계의\n가이드라인을\n제공합니다.',
    detail: '메시지, 증거, CTA를 같은 맥락에 배치해 다음 행동의 비용을 낮춥니다.',
    metric: '다음 단계 자동화',
  },
  {
    label: 'After',
    title: '확신이 생긴\n순간 바로\n행동합니다.',
    detail: '자연스럽게 행동을 유도하여 고객이 원하는 결과를 만들어냅니다.',
    metric: '매출의 증가',
  },
  {
    label: '적용가능한 범위는?',
    title: '넛지시스템의\n적용범위',
    detail: '랜딩 페이지, 포트폴리오, UX 개선까지 방문자의 판단 비용을 낮추는 기준으로 설계할 수 있습니다.',
    metric: 'Services',
  },
];

export const solutionSteps = [
  {
    title: '첫 화면에서 약속을 고정',
    description: '방문자가 10초 안에 “이 팀은 전환을 설계한다”는 메시지를 이해하도록 헤드라인과 증거를 배치합니다.',
  },
  {
    title: 'Before / After로 차이를 체감',
    description: '설명보다 짧은 상호작용을 먼저 보여주어 넛지 디자인의 효용을 직접 경험하게 합니다.',
  },
  {
    title: '성과 중심 포트폴리오로 설득',
    description: '각 프로젝트를 목표, 적용 원리, 결과 지표로 정리해 잠재 고객과 채용 담당자의 판단 비용을 낮춥니다.',
  },
  {
    title: '문의 CTA를 맥락마다 연결',
    description: '서비스, 사례, FAQ 하단에서 상담으로 이어지는 동일한 행동 경로를 반복 제공합니다.',
  },
];

export const projects = [
  {
    title: 'B2B SaaS 온보딩 리뉴얼',
    category: 'SaaS',
    summary: '복잡한 기능 소개를 역할 기반 시작 흐름으로 재구성했습니다.',
    goal: '무료 체험 사용자의 첫 핵심 행동 완료율 개선',
    result: '+38% activation',
    nudge: '첫 화면에서 사용자의 역할을 고르게 하고, 이후 CTA를 역할별로 좁혔습니다.',
    tech: ['React', 'MUI', 'Analytics'],
  },
  {
    title: '로컬 브랜드 예약 사이트',
    category: 'Commerce',
    summary: '메뉴, 후기, 예약 가능 시간을 한 흐름에 묶어 모바일 예약을 줄였습니다.',
    goal: '전화 문의 의존도를 낮추고 온라인 예약 전환 강화',
    result: '+24% booking',
    nudge: '인기 옵션과 잔여 슬롯을 함께 보여주어 결정을 미루는 사용자를 줄였습니다.',
    tech: ['Vite', 'MUI', 'Form'],
  },
  {
    title: '채용 브랜딩 포트폴리오',
    category: 'Brand',
    summary: '회사 문화와 프로젝트 결과를 지원자 관점의 증거 구조로 정리했습니다.',
    goal: '채용 담당자와 지원자가 빠르게 역량을 판단하도록 설계',
    result: '+31% career visits',
    nudge: '프로젝트 성과, 팀 역할, 채용 CTA를 상세 페이지 하단에서 연결했습니다.',
    tech: ['React', 'Storybook', 'CMS-ready'],
  },
];

export const faqs = [
  {
    question: '일반 UX와의 차이는 무엇이 다른가요?',
    answer: '사용자의 다음 행동을 방해하는 선택 부담, 정보 순서, CTA 위치를 조정해 전환 가능성을 높이는 설계 접근입니다.',
  },
  {
    question: '포트폴리오 사이트만 제작하나요?',
    answer: '브랜드 사이트, 랜딩 페이지, 서비스 소개 페이지, 채용 브랜딩 페이지까지 목적 달성이 필요한 웹 경험을 함께 설계합니다.',
  },
  {
    question: '만든 웹사이트를 확장할  수 있나요?',
    answer: 'PRD의 확장성 요구처럼 프로젝트, 서비스, 블로그 콘텐츠가 늘어날 수 있도록 데이터 구조와 컴포넌트를 분리해 설계합니다.',
  },
];
