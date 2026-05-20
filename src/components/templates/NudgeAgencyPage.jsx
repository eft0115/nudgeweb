import { useEffect, useMemo, useRef, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BlockIcon from '@mui/icons-material/Block';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import webnudgeWorryHover from '../../assets/brand/webnudge-worry-hover.webp';
import webnudgeSympathyHover from '../../../material/sympathy.webp';
import webnudgeAnticipateHover from '../../../material/2-removebg.webp';
import webnudgeActionHover from '../../../material/action.webp';
import webnudgeCarouselBg from '../../../material/bg.webp';
import webnudgeJumpMascot from '../../../material/2-removebg.webp';
import webnudgeSympathyPair from '../../../material/3-removebg-preview.png';
import webnudgeLogo from '../../../material/webnudge_logo.webp';
import webnudgeSectionBg from '../../../material/section.webp';
import webnudgeSmallMascot from '../../../material/children-removebg-preview.png';
import contactFormHtml from '../../../material/contact_form_web_agency.html?raw';
import notNudgeExampleHtml from '../../../material/not_nudge.html?raw';
import nudgeSystemHtml from '../../../material/nudge_system.html?raw';
import servicesSectionHtml from '../../../material/services_section.html?raw';
import yesNudgeExampleHtml from '../../../material/yes_nudge.html?raw';
import {
  faqs,
  nudgeStorySteps,
  projects,
} from '../../data/agencyContent';

const homepageButtonProps = {
  variant: 'outlined',
  color: 'secondary',
  size: 'large',
};

const activeHomepageButtonSx = {
  borderColor: 'primary.main',
  bgcolor: 'primary.main',
  color: '#F3F0E9',
  '&:hover': {
    borderColor: 'primary.main',
    bgcolor: 'primary.main',
    color: '#F3F0E9',
  },
};

const navHoverContent = {
  problem: {
    label: '감정',
    image: webnudgeWorryHover,
    imageClassName: 'problem-hover-mascot',
  },
  'nudge-story': {
    label: '공감',
    image: webnudgeSympathyHover,
    imageClassName: 'problem-hover-mascot solution-hover-mascot',
  },
  portfolio: {
    label: '기대',
    image: webnudgeAnticipateHover,
    imageClassName: 'problem-hover-mascot portfolio-hover-mascot',
  },
  faq: {
    label: '행동',
    image: webnudgeActionHover,
    imageClassName: 'problem-hover-mascot faq-hover-mascot',
  },
};

const heroBackgroundImages = [
  webnudgeSectionBg,
  webnudgeCarouselBg,
  webnudgeCarouselBg,
  webnudgeCarouselBg,
  webnudgeCarouselBg,
];

const heroIntroAnimationMs = 3900;
const heroCarouselIntervalMs = 7000;
const nudgeSectionGradient = 'linear-gradient(135deg, #159957 0%, #155799 100%)';
const portfolioSectionGradient = 'linear-gradient(135deg, #155799 0%, #159957 100%)';
const contactSectionGradient = 'linear-gradient(135deg, #2980b9 0%, #2c3e50 100%)';
const roughTopClipPath = 'polygon(0 0, 100% 0, 100% 58%, 92% 44%, 84% 70%, 75% 46%, 66% 64%, 56% 42%, 47% 72%, 37% 50%, 28% 68%, 18% 46%, 9% 62%, 0 52%)';
const roughBottomClipPath = 'polygon(0 44%, 9% 56%, 18% 34%, 28% 58%, 37% 38%, 47% 68%, 56% 40%, 66% 60%, 75% 36%, 84% 58%, 92% 42%, 100% 54%, 100% 100%, 0 100%)';
const roughEdgeFillSx = (fill) => (
  typeof fill === 'string' && fill.includes('gradient')
    ? { background: fill }
    : { bgcolor: fill }
);

const sectionRoughEdgeSx = ({
  top = 'background.default',
  bottom = 'background.default',
  zIndex = 0,
  showTop = true,
  showBottom = true,
} = {}) => ({
  position: 'relative',
  overflow: 'hidden',
  isolation: 'isolate',
  '& > *': {
    position: 'relative',
    zIndex: 3,
  },
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
    height: { xs: 24, md: 34 },
    pointerEvents: 'none',
    zIndex: zIndex + 2,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  },
  '&::before': {
    display: showTop ? 'block' : 'none',
    top: -1,
    ...roughEdgeFillSx(top),
    clipPath: roughTopClipPath,
  },
  '&::after': {
    display: showBottom ? 'block' : 'none',
    bottom: -1,
    ...roughEdgeFillSx(bottom),
    clipPath: roughBottomClipPath,
  },
});

const notNudgePreviewHtml = `
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    ${notNudgeExampleHtml}
    <style>
      body { margin: 0; background: #0a0a0a; }
      .site { width: 100%; max-height: none; min-height: 100vh; }
    </style>
  </head>
</html>
`;

const nudgeSystemPreviewHtml = `
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    ${nudgeSystemHtml}
    <style>
      body { margin: 0; background: #ffffff; }
      .outer { min-width: 920px; min-height: 100%; }
    </style>
  </head>
</html>
`;

const yesNudgePreviewHtml = `
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    ${yesNudgeExampleHtml}
    <style>
      body { margin: 0; background: #0a0a0a; }
      .site { width: 100%; max-height: none; min-height: 100vh; }
    </style>
  </head>
</html>
`;

const servicesSectionPreviewHtml = `
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root {
        --font-sans: Pretendard, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        --color-text-primary: #17201B;
        --color-text-secondary: #5B6960;
        --color-text-tertiary: #7E8A82;
        --color-background-primary: #FFFFFF;
        --color-border-secondary: rgba(21, 87, 153, 0.38);
        --color-border-tertiary: rgba(21, 153, 87, 0.18);
      }
      body {
        margin: 0;
        background: #F6FBF8;
      }
      .sv-wrap {
        padding: 2rem;
      }
      @media (max-width: 560px) {
        .sv-wrap {
          padding: 1.5rem;
        }
      }
    </style>
    ${servicesSectionHtml}
  </head>
</html>
`;

const contactFormHtmlWithAssets = contactFormHtml.replace('/material/2-removebg.png', webnudgeJumpMascot);

const contactFormPreviewHtml = `
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root {
        --font-sans: Pretendard, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        --color-text-primary: #1B1D21;
        --color-text-secondary: #58616C;
        --color-background-primary: #FFFFFF;
        --color-background-secondary: #F6F8FB;
        --color-border-tertiary: rgba(28, 38, 54, 0.14);
        --border-radius-md: 12px;
        --border-radius-lg: 24px;
      }
      body {
        margin: 0;
        background: transparent;
      }
      .cf-root {
        max-width: none;
        padding: 0;
      }
    </style>
    ${contactFormHtmlWithAssets}
  </head>
</html>
`;

const heroStoryPanels = [
  null,
  {
    number: '1.',
    title: '고객의 감정을 파악하기!',
    image: webnudgeLogo,
    imageAlt: '손가락으로 가리키는 땅콩 캐릭터',
    imageSide: 'left',
    textSizeBoost: 2,
    paragraphs: [
      '사업의 성공은 고객의 관심을 이끌어내야하고, 고객의 관심은 무의식적인 행동패턴을 가져오는 것입니다.\n',
      '신기하게도, 이는 웹페이지에서도 똑같이 적용이 되며, 웹페이지의 관심은 결국 매출로 가는 첫 걸음이 됩니다.\n',
      '그 시작은, 고객의 감정이 무엇인지 파악하여 공유해야하며,\n\n이러한 무의식적인 관심을 끌어내도록 웹페이지는 디자인 되어야합니다.',
    ],
  },
  {
    number: '2.',
    titleUnderlineGap: { xs: 0.25, md: 0.35 },
    textOffsetY: '-2px',
    textSizeBoost: true,
    title: '고객의 문제에 공감하기!',
    image: webnudgeSympathyPair,
    imageAlt: '큰 땅콩이 작은 땅콩을 공감해주는 장면',
    imageSide: 'right',
    paragraphs: [
      '고객의 감정을 파악하여 공유를 하게 되면 고객은 홀린듯 관심을 보이기 시작합니다.\n\n',
      '이 때, 이 감정을 진심으로 이해하고 감정의 원인을 알아준다면, 고객은 더욱 더 나도 모르게.. 사장님의 브랜드에 관심을 가지게 됩니다.\n\n',
      '감정을 공감하는 웹디자인이 고객의 마음을 얻습니다.',
    ],
  },
  {
    number: '3.',
    title: '고객에게 해결책을 주고\n기대하게 만들기!',
    image: webnudgeJumpMascot,
    imageAlt: '신나서 두 팔 벌린 땅콩 캐릭터',
    imageSide: 'left',
    textSizeBoost: 2,
    paragraphs: [
      '고객의 감정을 알아차리고,\n고객의 감정에 공감을 해주게 된다면\n이제 사장님은 신뢰를 얻습니다.\n\n',
      '이 때, 고객에게 문제의 해결책을 제시하고\n기대하게 만든다면 결제의 단계로\n나아갈 준비가 된 것입니다.\n\n',
      '이 순서를 웹페이지 디자인에 녹여내야합니다.',
    ],
  },
  {
    number: '4.',
    title: '고객을 행동하게 만들기!',
    image: webnudgeActionHover,
    imageAlt: '계산대에서 결제하는 땅콩 캐릭터',
    imageSide: 'right',
    textSizeBoost: 2,
    paragraphs: [
      '고객의 감정 -> 공감 -> 기대까지 얻어냈다면 마지막으로 고객이 행동하게끔 만들어야합니다.\n\n',
      '고객의 행동은 사장님의 입장에서는\n매출과 이익과 연결됩니다. 곧, 수익이죠!\n\n',
      '이러한 행동을 이끌어 내는 순차적 디자인 이어야 사업의 성공으로 갈 수 있습니다.',
    ],
  },
];

const problemSectionCards = [
  {
    number: '01',
    label: 'PROBLEM 1',
    title: '전문성은 보이지만,\n문의가 거의 없습니다',
    description: (
      <>
        예쁘고 화려한 디자인은 <Box component="strong">감탄만 하고 끝납니다.</Box>
        <br />
        보는 것에서 멈추고, 행동으로 이어지지 않습니다.
      </>
    ),
    tag: '감탄 -> 이탈',
    Icon: BlockIcon,
    colors: {
      soft: '#EEEDFE',
      main: '#534AB7',
      dark: '#3C3489',
      line: '#7F77DD',
    },
  },
  {
    number: '02',
    label: 'PROBLEM 2',
    title: '브랜드가 유저의\n감정을 이해 못합니다',
    description: (
      <>
        유저는 <Box component="strong">공감받고 싶습니다.</Box>
        <br />
        감정을 이해받아야만 다음 스텝으로 자연스럽게 넘어갈 수 있습니다.
      </>
    ),
    tag: '공감 없음 -> 이탈',
    Icon: FavoriteBorderIcon,
    colors: {
      soft: '#E1F5EE',
      main: '#0F6E56',
      dark: '#085041',
      line: '#1D9E75',
    },
  },
  {
    number: '03',
    label: 'PROBLEM 3',
    title: 'CTA가 다음 행동으로\n이어지지 않습니다',
    description: (
      <>
        유저의 <Box component="strong">다음 동작을 미리 설계</Box>해야 합니다.
        <br />
        그래야 다음 단계로 자연스럽게 넘어갈 수 있습니다.
      </>
    ),
    tag: '행동 설계 없음 -> 이탈',
    Icon: AdsClickIcon,
    colors: {
      soft: '#FAECE7',
      main: '#993C1D',
      dark: '#712B13',
      line: '#D85A30',
    },
  },
];

const portfolioShowcases = [
  {
    tab: '병원 샘플 1번',
    eyebrow: 'Hospital sample',
    title: '병원 샘플 홈페이지 1',
    description: '진료 안내와 예약 흐름을 한 화면에서 확인할 수 있는 병원형 홈페이지 샘플입니다.',
    url: 'https://hosptialsample1.vercel.app/',
  },
  {
    tab: '병원 샘플 2번',
    eyebrow: 'Hospital sample',
    title: '병원 샘플 홈페이지 2',
    description: '의료 서비스 소개와 신뢰 요소를 중심으로 구성한 두 번째 병원 샘플입니다.',
    url: 'https://hospitalsample2.vercel.app/',
  },
  {
    tab: '병원 샘플 3번',
    eyebrow: 'Hospital sample',
    title: '병원 샘플 홈페이지 3',
    description: '진료 경험과 전환 동선을 확장해 볼 수 있는 세 번째 병원 샘플입니다.',
    url: 'https://hospital3-virid.vercel.app/',
  },
  {
    tab: '브랜딩 샘플 1번',
    eyebrow: 'Branding page',
    title: 'KYHANR 브랜딩 페이지',
    description: '브랜드 메시지와 정체성을 한 페이지 안에서 보여주는 브랜딩 샘플입니다.',
    url: 'https://kyhanr.org',
  },
];

const portfolioGroups = [
  {
    id: 'hospital',
    label: '병원 홈페이지 샘플',
    sampleIndexes: [0, 1, 2],
  },
  {
    id: 'branding',
    label: '브랜딩',
    sampleIndexes: [3],
  },
];

const getDefaultPortfolioShowcaseIndex = () => {
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 599px)').matches) {
    return 3;
  }

  return 0;
};

const navBackgroundTargets = {
  problem: 1,
  'nudge-story': 2,
  portfolio: 3,
  faq: 4,
};

const navStoryItems = [
  {
    label: 'Problem',
    target: 'problem',
    step: '01',
    title: 'Find the friction',
    caption: 'Where visitors hesitate',
  },
  {
    label: 'Solution',
    target: 'nudge-story',
    step: '02',
    title: 'Point the next move',
    caption: 'One clear action path',
  },
  {
    label: 'Portfolio',
    target: 'portfolio',
    step: '03',
    title: 'Prove the change',
    caption: 'Results become evidence',
  },
  {
    label: 'FAQ',
    target: 'faq',
    step: '04',
    title: 'Remove the doubt',
    caption: 'Ready for contact',
  },
];

function BrandMascot({
  size = 96,
  alt = 'Webnudge mascot',
  sx = {},
}) {
  return (
    <Box
      component="img"
      src={webnudgeLogo}
      alt={alt}
      sx={{
        width: size,
        maxWidth: '100%',
        aspectRatio: '1 / 1',
        objectFit: 'contain',
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
        userSelect: 'none',
        ...sx,
      }}
    />
  );
}

function ScrollRevealStack({ children, sx = {}, ...props }) {
  const stackRef = useRef(null);

  useEffect(() => {
    const element = stackRef.current;

    if (!element) {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reducedMotionQuery.matches || typeof IntersectionObserver === 'undefined') {
      element.dataset.revealed = 'true';
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.revealed = 'true';
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Stack
      ref={stackRef}
      data-revealed="false"
      sx={{
        opacity: 0,
        transform: 'translateX(-34px)',
        transition: 'opacity 720ms cubic-bezier(0.16, 1, 0.3, 1), transform 720ms cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity, transform',
        '&[data-revealed="true"]': {
          opacity: 1,
          transform: 'translateX(0)',
          willChange: 'auto',
        },
        '@media (prefers-reduced-motion: reduce)': {
          opacity: 1,
          transform: 'translateX(0)',
          transition: 'none',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Stack>
  );
}

function TypewriterBrandName() {
  return (
    <Typography
      variant="h6"
      component="span"
      sx={{
        display: 'inline-grid',
        position: 'relative',
        minWidth: { xs: '5.1ch', md: '9.5ch' },
        color: 'secondary.main',
        fontWeight: 900,
        fontSize: { xs: 17, sm: 24, md: 30 },
        fontFamily: 'Outfit, "Pretendard Variable", Pretendard, system-ui, sans-serif',
        lineHeight: 1,
        overflow: 'visible',
        '&:hover .brand-hover-tagline': {
          animation: 'brandTaglineBlink 3.6s ease-in-out forwards',
        },
        '@keyframes brandTaglineBlink': {
          '0%, 18%, 36%, 54%': {
            opacity: 0,
            transform: 'translate(-50%, -4px)',
          },
          '9%, 27%, 45%, 70%, 100%': {
            opacity: 1,
            transform: 'translate(-50%, 0)',
          },
        },
      }}
    >
      <Box
        component="span"
        className="brand-desktop-text"
        sx={{
          display: { xs: 'none', md: 'inline-block' },
          width: '100%',
          height: 35,
          lineHeight: '35px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          pr: 0.5,
          borderRight: '2px solid currentColor',
          animation: 'brandTyping 1.8s steps(8, end) 0.2s both, brandCursor 0.8s step-end 4',
          '@keyframes brandTyping': {
            '0%': { width: 0 },
            '100%': { width: '100%' },
          },
          '@keyframes brandCursor': {
            '0%, 100%': { borderColor: 'currentColor' },
            '50%': { borderColor: 'transparent' },
          },
        }}
      >
        NudgeWeb
      </Box>
      <Box
        component="span"
        className="brand-mobile-text"
        aria-label="NudgeWeb"
        sx={{
          display: { xs: 'inline-grid', md: 'none' },
          gridTemplateRows: 'repeat(2, 1em)',
          lineHeight: 1,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          pr: 0.25,
          animation: 'brandMobileFadeIn 820ms ease-out 0.12s both',
          '@keyframes brandMobileFadeIn': {
            '0%': {
              opacity: 0,
              transform: 'translateY(4px)',
            },
            '100%': {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
        }}
      >
        <Box component="span" sx={{ lineHeight: 1 }}>Nudge</Box>
        <Box component="span" sx={{ lineHeight: 1 }}>Web</Box>
      </Box>
      <Box
        component="span"
        className="brand-hover-tagline"
        sx={{
          position: 'absolute',
          display: { xs: 'none', md: 'block' },
          top: 'calc(100% + 8px)',
          left: '50%',
          opacity: 0,
          whiteSpace: 'nowrap',
          color: 'secondary.main',
          fontSize: { xs: 11, md: 13 },
          fontWeight: 800,
          lineHeight: 1,
          pointerEvents: 'none',
          transform: 'translate(-50%, -4px)',
        }}
      >
        →→ 매출이 오르는 웹디자인
      </Box>
    </Typography>
  );
}

function NavStoryPreview({ item }) {
  return (
    <Box
      className="nav-story-preview"
      sx={{
        position: 'absolute',
        top: 'calc(100% + 14px)',
        left: '50%',
        width: 288,
        minHeight: 178,
        px: 2,
        py: 2,
        bgcolor: '#FFFFFF',
        color: 'secondary.main',
        opacity: 0,
        visibility: 'hidden',
        transform: 'translate(-50%, 8px)',
        transition: 'opacity 180ms ease, transform 180ms ease, visibility 180ms ease',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 30,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(58, 36, 21, 0.08) 1px, transparent 0)',
          backgroundSize: '14px 14px',
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          height: 92,
          mb: 1.5,
          overflow: 'hidden',
          bgcolor: 'secondary.light',
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 14,
            top: 12,
            width: 42,
            height: 42,
            display: 'grid',
            placeItems: 'center',
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            fontWeight: 900,
          }}
        >
          {item.step}
        </Box>
        <Box
          sx={{
            position: 'absolute',
            left: 14,
            right: 32,
            bottom: 16,
            height: 4,
            bgcolor: 'primary.main',
            '&::after': {
              content: '""',
              position: 'absolute',
              right: -18,
              top: -6,
              borderStyle: 'solid',
              borderWidth: '8px 0 8px 18px',
              borderColor: 'transparent transparent transparent #E18C37',
            },
          }}
        />
      </Box>
      <Stack spacing={0.5} sx={{ position: 'relative', zIndex: 1, alignItems: 'flex-start' }}>
        <Typography variant="caption" sx={{ fontWeight: 900, color: 'primary.dark' }}>
          {item.step}
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 900, lineHeight: 1.15 }}>
          {item.title}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'none' }}>
          {item.caption}
        </Typography>
      </Stack>
    </Box>
  );
}

/**
 * NudgeAgencyPage 컴포넌트
 *
 * Props:
 * 별도 props 없이 PRD 기반 웹 에이전시 포트폴리오 화면을 렌더링합니다.
 *
 * Example usage:
 * <NudgeAgencyPage />
 */
function NudgeAgencyPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeHeroBackground, setActiveHeroBackground] = useState(0);
  const [isHeroCarouselPaused, setIsHeroCarouselPaused] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const matchesQuery = normalizedQuery.length === 0
        || [project.title, project.summary, project.category, project.nudge]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  useEffect(() => {
    if (isHeroCarouselPaused) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setActiveHeroBackground((current) => (current + 1) % heroBackgroundImages.length);
    }, activeHeroBackground === 0 ? heroIntroAnimationMs : heroCarouselIntervalMs);

    return () => window.clearTimeout(timeoutId);
  }, [activeHeroBackground, isHeroCarouselPaused]);

  const handleHeroBackgroundChange = (nextIndex) => {
    setActiveHeroBackground((nextIndex + heroBackgroundImages.length) % heroBackgroundImages.length);
  };

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      <SiteHeader
        onHeroBackgroundChange={handleHeroBackgroundChange}
        onContactOpen={() => setIsContactModalOpen(true)}
      />

      <Box component="main">
        <HeroSection
          activeBackground={activeHeroBackground}
          onBackgroundChange={handleHeroBackgroundChange}
          isCarouselPaused={isHeroCarouselPaused}
          onCarouselPauseToggle={() => setIsHeroCarouselPaused((current) => !current)}
          />
          <ProblemSection />
          <NudgeStorySection activeStep={activeStep} onStepChange={setActiveStep} />
          <PortfolioSection
            activeCategory={activeCategory}
            filteredProjects={filteredProjects}
          query={query}
          onCategoryChange={setActiveCategory}
          onQueryChange={setQuery}
        />
        <FaqSection />
        <ContactSection />
      </Box>
      <ContactFormModal
        open={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </Box>
  );
}

function SiteHeader({ onHeroBackgroundChange, onContactOpen }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavClick = (targetBackground) => {
    if (targetBackground !== undefined) {
      onHeroBackgroundChange(targetBackground);
    }

    setIsMobileNavOpen(false);
  };

  useEffect(() => {
    if (!isMobileNavOpen) {
      return undefined;
    }

    const closeMobileNav = () => setIsMobileNavOpen(false);

    window.addEventListener('scroll', closeMobileNav, { passive: true });

    return () => window.removeEventListener('scroll', closeMobileNav);
  }, [isMobileNavOpen]);

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        bgcolor: '#FFFFFF',
        backdropFilter: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ minHeight: { xs: 64, md: 72 }, gap: { xs: 0, md: 2 }, position: 'relative' }}
        >
          <Stack
            direction="row"
            spacing={{ xs: 0.25, md: 1.25 }}
            alignItems="center"
            sx={{
              minWidth: 0,
              flex: { xs: '0 0 30%', md: '0 0 auto' },
              maxWidth: { xs: '30%', md: 'none' },
              overflow: { xs: 'visible', md: 'initial' },
            }}
          >
            <Box
              component="a"
              href="/"
              aria-label="메인페이지로 이동"
              sx={{
                width: { xs: 52, md: 116 },
                height: { xs: 52, md: 116 },
                minWidth: { xs: 52, md: 116 },
                flex: { xs: '0 0 52px', md: '0 0 116px' },
                display: 'grid',
                placeItems: 'center',
                overflow: 'visible',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
                animation: 'logoFadeIn 700ms ease-out both',
                '@keyframes logoFadeIn': {
                  from: {
                    opacity: 0,
                    transform: 'translateY(-6px)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
              }}
            >
              <BrandMascot
                size={{ xs: 52, md: 116 }}
                alt="NudgeWeb logo"
                sx={{
                  mixBlendMode: 'multiply',
                  animation: 'brandIconRollIn 1.1s cubic-bezier(0.2, 0.8, 0.2, 1) both',
                  '@keyframes brandIconRollIn': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateX(-116px) rotate(-180deg)',
                    },
                    '72%': {
                      opacity: 1,
                      transform: 'translateX(6px) rotate(10deg)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateX(0) rotate(0deg)',
                    },
                  },
                }}
              />
            </Box>
            <TypewriterBrandName />
          </Stack>
          <Box
            aria-hidden="true"
            sx={{
              display: { xs: 'block', md: 'none' },
              flex: '0 0 40%',
              maxWidth: '40%',
            }}
          />
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flex: '0 0 30%',
              maxWidth: '30%',
              justifyContent: 'flex-end',
              position: 'relative',
            }}
          >
            <Button
              type="button"
              aria-label={isMobileNavOpen ? '모바일 메뉴 닫기' : '모바일 메뉴 열기'}
              aria-expanded={isMobileNavOpen}
              onClick={() => setIsMobileNavOpen((current) => !current)}
              sx={{
                minWidth: 0,
                width: '100%',
                height: 42,
                px: 1,
                py: 0,
                position: 'relative',
                borderRadius: '64% 36% 59% 41% / 48% 64% 36% 52%',
                color: 'secondary.main',
                border: 0,
                bgcolor: 'transparent',
                fontSize: { xs: 12, sm: 13 },
                fontWeight: 900,
                letterSpacing: 0,
                boxShadow: '0 10px 24px rgba(58, 36, 21, 0.08)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 'inherit',
                  padding: '2px',
                  background: 'linear-gradient(135deg, #b9a0a0 0%, #794747 34%, #4e2020 68%, #111111 100%)',
                  WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  pointerEvents: 'none',
                },
                '&:hover, &:focus-visible': {
                  bgcolor: 'transparent',
                },
              }}
            >
              {isMobileNavOpen ? '닫기' : '넛지웹이란?'}
            </Button>
            <Stack
              component="nav"
              spacing={1}
              sx={{
                position: 'absolute',
                top: 'calc(100% + 10px)',
                right: 0,
                width: 'min(156px, calc(100vw - 32px))',
                p: 1,
                borderRadius: '16px',
                bgcolor: '#FFFFFF',
                border: '1px solid',
                borderColor: 'rgba(58, 36, 21, 0.12)',
                boxShadow: '0 22px 60px rgba(25, 31, 44, 0.18)',
                backdropFilter: 'none',
                opacity: isMobileNavOpen ? 1 : 0,
                visibility: isMobileNavOpen ? 'visible' : 'hidden',
                transform: isMobileNavOpen ? 'translateY(0)' : 'translateY(-8px)',
                transition: 'opacity 180ms ease, transform 180ms ease, visibility 180ms ease',
                pointerEvents: isMobileNavOpen ? 'auto' : 'none',
                zIndex: 20,
              }}
            >
              {navStoryItems.map((item) => {
                const targetBackground = navBackgroundTargets[item.target];

                return (
                  <Button
                    key={item.target}
                    href={`#${item.target}`}
                    {...homepageButtonProps}
                    onClick={() => handleMobileNavClick(targetBackground)}
                    sx={{
                      justifyContent: 'space-between',
                      minHeight: 44,
                      borderRadius: '10px',
                      color: 'secondary.main',
                      borderColor: 'rgba(58, 36, 21, 0.18)',
                      bgcolor: '#FFFFFF',
                      '&:hover, &:focus-visible': {
                        borderColor: 'primary.main',
                        bgcolor: 'rgba(225, 140, 55, 0.08)',
                      },
                    }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Stack>
          </Box>
          <Stack
            component="nav"
            direction="row"
            spacing={1}
            sx={{
              display: { xs: 'none', md: 'flex' },
              position: 'relative',
              overflow: 'visible',
              '& > .MuiButton-root': {
                width: 120,
                minWidth: 120,
                flex: '0 0 120px',
                px: 0,
              },
            }}
          >
            {navStoryItems.map((item) => {
              const hoverContent = navHoverContent[item.target];
              const hasMascotHover = Boolean(hoverContent);
              const targetBackground = navBackgroundTargets[item.target];

              return (
                <Button
                  key={item.target}
                  href={`#${item.target}`}
                  {...homepageButtonProps}
                  onMouseEnter={() => {
                    if (targetBackground !== undefined) {
                      onHeroBackgroundChange(targetBackground);
                    }
                  }}
                  onFocus={() => {
                    if (targetBackground !== undefined) {
                      onHeroBackgroundChange(targetBackground);
                    }
                  }}
                  sx={{
                    position: 'relative',
                    overflow: 'visible',
                    '&:hover, &:focus-visible': hasMascotHover
                      ? {
                        backgroundColor: '#e18c37 !important',
                      }
                      : undefined,
                    '& .problem-hover-label': {
                      display: 'none',
                    },
                    '&:hover .problem-default-label, &:focus-visible .problem-default-label': {
                      display: 'none',
                    },
                    '&:hover .problem-hover-label, &:focus-visible .problem-hover-label': {
                      display: 'inline',
                    },
                    '&:hover .nav-story-preview, &:focus-visible .nav-story-preview': {
                      opacity: hasMascotHover ? 0 : 1,
                      visibility: hasMascotHover ? 'hidden' : 'visible',
                      transform: 'translate(-50%, 0)',
                    },
                    '& .problem-hover-panel': {
                      position: 'absolute',
                      top: 'calc(100% + 10px)',
                      left: '50%',
                      zIndex: 0,
                      width: 120,
                      height: 88,
                      overflow: 'hidden',
                      bgcolor: 'common.white',
                      borderRadius: '18px',
                      backdropFilter: 'blur(16px)',
                      opacity: 0,
                      pointerEvents: 'none',
                      transform: 'translate(-50%, -6px)',
                      transition: 'opacity 180ms ease, transform 180ms ease',
                    },
                    '&:hover .problem-hover-panel, &:focus-visible .problem-hover-panel': {
                      opacity: 1,
                      transform: 'translate(-50%, 0)',
                    },
                    '& .problem-hover-mascot': {
                      position: 'absolute',
                      top: '50%',
                      left: 0,
                      width: 42,
                      height: 54,
                      objectFit: 'contain',
                      opacity: 1,
                      pointerEvents: 'none',
                      transform: 'translate(6px, -50%)',
                    },
                    '& .solution-hover-mascot': {
                      width: 82,
                      height: 82,
                      transform: 'translate(-8px, -50%)',
                    },
                    '& .portfolio-hover-mascot': {
                      width: 118,
                      height: 88,
                      transform: 'translate(-14px, -50%)',
                    },
                    '& .faq-hover-mascot': {
                      width: 120,
                      height: 88,
                      transform: 'translate(-16px, -50%)',
                    },
                    '&:hover .problem-hover-mascot, &:focus-visible .problem-hover-mascot': {
                      animation: 'problemMascotSlide 1.15s ease-in-out infinite alternate',
                    },
                    '&:hover .solution-hover-mascot, &:focus-visible .solution-hover-mascot': {
                      animation: 'solutionMascotSlide 1.15s ease-in-out infinite alternate',
                    },
                    '&:hover .portfolio-hover-mascot, &:focus-visible .portfolio-hover-mascot': {
                      animation: 'portfolioMascotSlide 1.15s ease-in-out infinite alternate',
                    },
                    '&:hover .faq-hover-mascot, &:focus-visible .faq-hover-mascot': {
                      animation: 'faqMascotSlide 1.15s ease-in-out infinite alternate',
                    },
                    '& .problem-button-label': {
                      position: 'relative',
                      zIndex: 1,
                    },
                    '@keyframes problemMascotSlide': {
                      from: {
                        transform: 'translate(8px, -50%)',
                      },
                      to: {
                        transform: 'translate(70px, -50%)',
                      },
                    },
                    '@keyframes solutionMascotSlide': {
                      from: {
                        transform: 'translate(-8px, -50%)',
                      },
                      to: {
                        transform: 'translate(46px, -50%)',
                      },
                    },
                    '@keyframes portfolioMascotSlide': {
                      from: {
                        transform: 'translate(-14px, -50%)',
                      },
                      to: {
                        transform: 'translate(16px, -50%)',
                      },
                    },
                    '@keyframes faqMascotSlide': {
                      from: {
                        transform: 'translate(-16px, -50%)',
                      },
                      to: {
                        transform: 'translate(14px, -50%)',
                      },
                    },
                  }}
                >
                  {hasMascotHover ? (
                    <Box
                      component="span"
                      className="problem-hover-panel"
                    >
                      <Box
                        component="img"
                        src={hoverContent.image}
                        alt=""
                        aria-hidden="true"
                        className={hoverContent.imageClassName}
                      />
                    </Box>
                  ) : null}
                  <Box component="span" className="problem-button-label">
                    {hasMascotHover ? (
                      <>
                        <Box component="span" className="problem-default-label">{item.label}</Box>
                        <Box component="span" className="problem-hover-label">{hoverContent.label}</Box>
                      </>
                    ) : item.label}
                  </Box>
                  {hasMascotHover ? null : <NavStoryPreview item={item} />}
                </Button>
              );
            })}
          </Stack>
          <Button
            type="button"
            {...homepageButtonProps}
            endIcon={<ArrowForwardIcon />}
            onClick={onContactOpen}
            sx={{
              display: { xs: 'none', md: 'inline-flex' },
              flex: '0 0 auto',
              minWidth: { xs: 112, sm: 132 },
              px: { xs: 1.25, sm: 2 },
              fontSize: { xs: 13, sm: 14 },
              '& .MuiButton-endIcon': {
                ml: { xs: 0.5, sm: 1 },
              },
            }}
          >
            프로젝트 상담
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

function ContactFormModal({ open, onClose }) {
  if (!open) {
    return null;
  }

  return (
    <Box
      role="presentation"
      onClick={onClose}
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 60,
        display: 'grid',
        placeItems: 'center',
        px: { xs: 2, md: 4 },
        py: { xs: 3, md: 5 },
        bgcolor: 'rgba(11, 18, 28, 0.58)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Box
        role="dialog"
        aria-modal="true"
        aria-label="웹 에이전시 문의하기 양식"
        onClick={(event) => event.stopPropagation()}
        sx={{
          position: 'relative',
          width: 'min(760px, 100%)',
          maxHeight: 'min(760px, calc(100vh - 48px))',
          overflow: 'hidden',
          borderRadius: 4,
          bgcolor: 'background.paper',
          boxShadow: '0 34px 110px rgba(0, 0, 0, 0.34)',
          animation: 'contactModalIn 260ms ease-out both',
          '@keyframes contactModalIn': {
            from: {
              opacity: 0,
              transform: 'translateY(18px) scale(0.97)',
            },
            to: {
              opacity: 1,
              transform: 'translateY(0) scale(1)',
            },
          },
        }}
      >
        <Button
          type="button"
          aria-label="문의하기 양식 닫기"
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 14,
            right: 14,
            zIndex: 2,
            minWidth: 42,
            width: 42,
            height: 42,
            p: 0,
            borderRadius: '50%',
            bgcolor: 'rgba(255, 255, 255, 0.94)',
            color: 'secondary.main',
            boxShadow: '0 10px 26px rgba(0, 0, 0, 0.16)',
            '&:hover, &:focus-visible': {
              bgcolor: '#FFFFFF',
              color: 'primary.main',
            },
          }}
        >
          <CloseIcon fontSize="small" />
        </Button>
        <Box
          component="iframe"
          title="웹 에이전시 문의하기 양식"
          srcDoc={contactFormPreviewHtml}
          sx={{
            display: 'block',
            width: '100%',
            height: { xs: 'calc(100vh - 72px)', md: 720 },
            maxHeight: 'calc(100vh - 48px)',
            border: 0,
            bgcolor: 'transparent',
          }}
        />
      </Box>
    </Box>
  );
}

function HeroSection({
  activeBackground,
  onBackgroundChange,
  isCarouselPaused,
  onCarouselPauseToggle,
}) {
  const shouldShowHeroCopy = activeBackground === 0;
  const activeStoryPanel = heroStoryPanels[activeBackground];
  const heroTitleLeadRef = useRef(null);
  const [heroSubtitleWidth, setHeroSubtitleWidth] = useState(null);

  useEffect(() => {
    const titleLead = heroTitleLeadRef.current;

    if (!titleLead) {
      return undefined;
    }

    const updateSubtitleWidth = () => {
      setHeroSubtitleWidth(titleLead.getBoundingClientRect().width);
    };

    updateSubtitleWidth();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateSubtitleWidth);
      return () => window.removeEventListener('resize', updateSubtitleWidth);
    }

    const resizeObserver = new ResizeObserver(updateSubtitleWidth);
    resizeObserver.observe(titleLead);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    heroBackgroundImages.slice(1).forEach((image) => {
      const preloadImage = new Image();
      preloadImage.decoding = 'async';
      preloadImage.src = image;
    });
  }, []);

  return (
    <Box
        component="section"
        sx={{
          ...sectionRoughEdgeSx({ showTop: false, showBottom: false }),
          bgcolor: '#FCFCF0',
          '--hero-rough-edge-height': { xs: '24px', md: '34px' },
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - var(--hero-rough-edge-height) * 0.46), 92% calc(100% - var(--hero-rough-edge-height) * 0.58), 84% calc(100% - var(--hero-rough-edge-height) * 0.36), 75% calc(100% - var(--hero-rough-edge-height) * 0.64), 66% calc(100% - var(--hero-rough-edge-height) * 0.40), 56% calc(100% - var(--hero-rough-edge-height) * 0.60), 47% calc(100% - var(--hero-rough-edge-height) * 0.32), 37% calc(100% - var(--hero-rough-edge-height) * 0.62), 28% calc(100% - var(--hero-rough-edge-height) * 0.42), 18% calc(100% - var(--hero-rough-edge-height) * 0.66), 9% calc(100% - var(--hero-rough-edge-height) * 0.44), 0 calc(100% - var(--hero-rough-edge-height) * 0.56))',
        minHeight: { xs: 500, md: 'calc(100vh - 82px)' },
        pt: { xs: 6, md: '160px' },
        pb: { xs: 6, md: '128px' },
        px: 0,
      }}
    >
      <Box
        component="img"
        src={heroBackgroundImages[0]}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        sx={{
          position: 'absolute',
          width: 1,
          height: 1,
          opacity: 0,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />
      {heroBackgroundImages.map((image, index) => (
        <Box
          key={`${image}-${index}`}
          aria-hidden="true"
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: activeBackground === index ? 1 : 0,
            transform: activeBackground === index && index > 0 ? 'scale(1.06)' : 'scale(1)',
            transition: 'opacity 900ms ease, transform 7000ms ease-out',
          }}
        />
      ))}
      <Stack
        direction="row"
        spacing={0.75}
        alignItems="center"
        justifyContent="center"
        sx={{
          position: 'absolute',
          left: '50%',
          bottom: { xs: 14, md: 39 },
          zIndex: 5,
          transform: 'translateX(-50%)',
          bgcolor: 'transparent',
          border: '1px solid transparent',
          backdropFilter: 'none',
          px: 0.75,
          py: 0.5,
          borderRadius: 999,
        }}
      >
        <Button
          type="button"
          aria-label="이전 배경"
          onClick={() => onBackgroundChange(activeBackground - 1)}
          sx={{
            minWidth: 28,
            width: 28,
            height: 28,
            p: 0,
            color: 'secondary.main',
            borderColor: 'transparent',
            bgcolor: 'transparent',
            '&:hover, &:focus-visible': {
              bgcolor: 'transparent',
            },
          }}
        >
          <KeyboardArrowLeftIcon fontSize="small" />
        </Button>
        <Stack direction="row" spacing={0.5} alignItems="center">
          {heroBackgroundImages.map((image, index) => (
              <Box
                key={`indicator-${image}-${index}`}
              component="button"
              type="button"
              aria-label={`${index + 1}번째 배경`}
              onClick={() => onBackgroundChange(index)}
              sx={{
                width: activeBackground === index ? 18 : 6,
                height: 6,
                p: 0,
                border: 0,
                borderRadius: 999,
                bgcolor: activeBackground === index ? 'primary.main' : 'rgba(58, 36, 21, 0.28)',
                cursor: 'pointer',
                transition: 'width 180ms ease, background-color 180ms ease',
              }}
            />
          ))}
        </Stack>
        <Button
          type="button"
          aria-label={isCarouselPaused ? 'Play hero carousel' : 'Pause hero carousel'}
          aria-pressed={isCarouselPaused}
          onClick={onCarouselPauseToggle}
          sx={{
            minWidth: 28,
            width: 28,
            height: 28,
            p: 0,
            color: isCarouselPaused ? 'primary.main' : 'secondary.main',
            borderColor: 'transparent',
            bgcolor: 'transparent',
            fontSize: 15,
            fontWeight: 900,
            lineHeight: 1,
            '&:hover, &:focus-visible': {
              color: 'primary.main',
              bgcolor: 'transparent',
            },
          }}
        >
          {isCarouselPaused ? '▶' : '||'}
        </Button>
        <Button
          type="button"
          aria-label="다음 배경"
          onClick={() => onBackgroundChange(activeBackground + 1)}
          sx={{
            minWidth: 28,
            width: 28,
            height: 28,
            p: 0,
            color: 'secondary.main',
            borderColor: 'transparent',
            bgcolor: 'transparent',
            '&:hover, &:focus-visible': {
              bgcolor: 'transparent',
            },
          }}
        >
          <KeyboardArrowRightIcon fontSize="small" />
        </Button>
      </Stack>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: { md: 1503 },
          px: { xs: 2, md: 0 },
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            minHeight: { xs: 'auto', md: 430 },
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
          }}
        >
          <Stack
            spacing={0}
            alignItems="center"
            sx={{
              display: { xs: shouldShowHeroCopy ? 'flex' : 'none', md: 'flex' },
              position: 'relative',
              minHeight: { xs: 'auto', md: 340 },
              justifyContent: 'center',
              textAlign: 'center',
              opacity: shouldShowHeroCopy ? 1 : 0,
              visibility: shouldShowHeroCopy ? 'visible' : 'hidden',
              pointerEvents: shouldShowHeroCopy ? 'auto' : 'none',
              transform: 'translateY(20px)',
              transition: 'opacity 420ms ease, visibility 420ms ease',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                maxWidth: 1503,
                fontSize: { xs: 'clamp(32px, 9.4vw, 42px)', sm: 59, lg: 69 },
                lineHeight: 1.14,
                color: 'transparent',
                backgroundImage: 'linear-gradient(90deg, #3C3B3F 0%, #605C3C 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: 'none',
                '& .hero-title-line': {
                  display: 'block',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  width: '100%',
                  maxWidth: '100%',
                  mt: '0.18em',
                  '&:first-of-type': {
                    mt: 0,
                  },
                },
                '& .hero-title-text': {
                  display: 'inline-block',
                  opacity: 0,
                  clipPath: 'inset(0 100% 0 0)',
                  backgroundImage: 'linear-gradient(90deg, #3C3B3F 0%, #605C3C 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                    WebkitTextStroke: '0.7px rgba(10, 10, 10, 0.9)',
                    paintOrder: 'stroke fill',
                  textShadow: 'none',
                  filter: 'none',
                },
                '& .hero-title-type-1': {
                  animation: 'heroTitleType 850ms steps(8, end) 120ms forwards',
                },
                '& .hero-title-type-2': {
                  animation: 'heroTitleType 900ms steps(7, end) 980ms forwards',
                },
                '& .hero-title-home-char': {
                  display: 'inline-block',
                  opacity: 0,
                  clipPath: 'none',
                  backgroundImage: 'linear-gradient(90deg, #159957 0%, #155799 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  WebkitTextStroke: 0,
                  textShadow: 'none',
                  filter: 'blur(5px)',
                  animation: 'heroTitleCharFade 180ms steps(2, end) forwards',
                },
                '& .hero-title-home-char:nth-of-type(1)': {
                  animationDelay: '1980ms',
                },
                '& .hero-title-home-char:nth-of-type(2)': {
                  animationDelay: '2140ms',
                },
                '& .hero-title-home-char:nth-of-type(3)': {
                  animationDelay: '2300ms',
                },
                '& .hero-title-home-char:nth-of-type(4)': {
                  animationDelay: '2460ms',
                },
                '& .hero-title-home-suffix': {
                  animationDelay: '2620ms',
                },
                '& .hero-title-fade': {
                  clipPath: 'none',
                  animation: 'heroTitleFade 800ms ease-out 3000ms forwards',
                },
                '@keyframes heroTitleType': {
                  from: {
                    opacity: 1,
                    clipPath: 'inset(0 100% 0 0)',
                  },
                  to: {
                    opacity: 1,
                    clipPath: 'inset(0 0 0 0)',
                  },
                },
                '@keyframes heroTitleCharFade': {
                  '0%': {
                    opacity: 0,
                    filter: 'blur(5px)',
                    transform: 'translateY(8px)',
                  },
                  '65%': {
                    opacity: 1,
                    filter: 'blur(1px)',
                    transform: 'translateY(0)',
                  },
                  '100%': {
                    opacity: 1,
                    filter: 'blur(0)',
                    transform: 'translateY(0)',
                  },
                },
                '@keyframes heroTitleFade': {
                  from: {
                    opacity: 0,
                    transform: 'translateY(12px)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
              }}
            >
              <Box component="span" className="hero-title-line">
                <Box ref={heroTitleLeadRef} component="span" className="hero-title-text hero-title-type-1">
                  사장님의 성공은
                </Box>
              </Box>
              <Box component="span" className="hero-title-line">
                <Box component="span" className="hero-title-text hero-title-type-2">
                  잘짜여진&nbsp;
                </Box>
                <Box component="span" aria-label="홈페이지는">
                  {'홈페이지'.split('').map((letter) => (
                    <Box key={letter} component="span" className="hero-title-home-char">
                      {letter}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box component="span" className="hero-title-line">
                <Box component="span" className="hero-title-text hero-title-fade">
                  하나로 시작된다!
                </Box>
              </Box>
            </Typography>
              <Typography
                variant="h5"
                sx={{
                  width: { xs: 'auto', sm: heroSubtitleWidth ? `${heroSubtitleWidth}px` : 'auto' },
                  maxWidth: '100%',
                  fontSize: { xs: 13, sm: 16, md: 21 },
                  color: 'transparent',
                  backgroundImage: 'linear-gradient(90deg, #A43931 0%, #1D4350 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  mt: { xs: 4, md: 5 },
                  mb: { xs: 1.5, md: 2 },
                }}
            >
              넛지시스템을 접목한 웹사이트를 만들어보세요!
            </Typography>
            <Button
              href="#portfolio"
              {...homepageButtonProps}
              sx={{
                position: 'relative',
                overflow: 'visible',
                alignSelf: 'center',
                width: 200,
                maxWidth: 200,
                minHeight: 50,
                borderRadius: '5px',
                mt: { xs: 1.5, md: 2 },
                mb: { xs: 4, md: 5 },
                transition: 'transform 180ms ease, background-color 180ms ease, color 180ms ease',
                '&:hover, &:focus-visible': {
                  transform: 'none',
                },
                '& .hero-portfolio-button-label': {
                  position: 'relative',
                  zIndex: 2,
                },
                '& .hero-portfolio-button-peanut': {
                  position: 'absolute',
                  left: { xs: 'calc(50% - 112px)', md: 'calc(50% - 122px)' },
                  bottom: -4,
                  width: { xs: 46, md: 58 },
                  height: { xs: 46, md: 58 },
                  objectFit: 'contain',
                  opacity: 0,
                  zIndex: 3,
                  pointerEvents: 'none',
                  transform: 'translateX(-260px) translateY(0) rotate(-540deg) scale(0.82)',
                  transformOrigin: '50% 78%',
                },
                '&:hover .hero-portfolio-button-peanut, &:focus-visible .hero-portfolio-button-peanut': {
                  animation: 'heroPortfolioPeanutRollJump 980ms cubic-bezier(0.18, 0.82, 0.2, 1) forwards',
                },
                '@keyframes heroPortfolioPeanutRollJump': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateX(-260px) translateY(0) rotate(-540deg) scale(0.82)',
                  },
                  '18%': {
                    opacity: 1,
                  },
                  '62%': {
                    opacity: 1,
                    transform: 'translateX(-12px) translateY(0) rotate(18deg) scale(0.9)',
                  },
                  '78%': {
                    opacity: 1,
                    transform: 'translateX(0) translateY(-18px) rotate(28deg) scale(1.04)',
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateX(0) translateY(0) rotate(0deg) scale(0.94)',
                  },
                },
                '@media (prefers-reduced-motion: reduce)': {
                  '&:hover .hero-portfolio-button-peanut, &:focus-visible .hero-portfolio-button-peanut': {
                    animation: 'none',
                    opacity: 1,
                    transform: 'translateX(0) translateY(0) rotate(0deg) scale(0.94)',
                  },
                },
              }}
            >
              <Box
                component="img"
                src={webnudgeJumpMascot}
                alt=""
                className="hero-portfolio-button-peanut"
                aria-hidden="true"
              />
              <Box component="span" className="hero-portfolio-button-label">
                작업물 보러가기
              </Box>
            </Button>
          </Stack>
          {activeStoryPanel ? (
            <HeroStoryPanel panel={activeStoryPanel} />
          ) : null}
        </Box>
      </Container>
    </Box>
  );
}

function HeroStoryPanel({ panel }) {
  const imageFirst = panel.imageSide === 'left';

  return (
    <Box
      sx={{
        position: { xs: 'relative', md: 'absolute' },
        inset: { md: 0 },
        zIndex: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        px: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1144,
          minHeight: { xs: 392, md: 396 },
          display: 'flex',
          flexDirection: { xs: 'row', md: imageFirst ? 'row' : 'row-reverse' },
          overflow: 'hidden',
          position: 'relative',
          borderRadius: '20px',
          border: '2px solid transparent',
          backgroundImage: 'linear-gradient(#FDF8F2, #FDF8F2)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box',
          boxShadow: '0 34px 90px rgba(42, 29, 12, 0.24), 0 12px 28px rgba(225, 140, 55, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.86)',
          transform: 'translateY(-6px)',
          animation: 'heroStoryPanelIn 620ms ease-out both',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: -2,
            borderRadius: 'inherit',
            padding: '2px',
            background: 'linear-gradient(135deg, transparent 0%, #EB0000 16%, #95008A 28%, #3300FC 40%, transparent 56%, transparent 100%)',
            backgroundSize: '260% 260%',
            animation: 'heroStoryBorderWave 2.4s linear infinite',
            WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none',
            zIndex: 2,
          },
          '& > *': {
            position: 'relative',
            zIndex: 1,
          },
          '@keyframes heroStoryPanelIn': {
            from: {
              opacity: 0,
              transform: `translateX(${imageFirst ? '-18px' : '18px'})`,
            },
            to: {
              opacity: 1,
              transform: 'translateX(0)',
            },
          },
          '@keyframes heroStoryBorderWave': {
            '0%': {
              backgroundPosition: '0% 100%',
            },
            '50%': {
              backgroundPosition: '100% 0%',
            },
            '100%': {
              backgroundPosition: '0% 100%',
            },
          },
          '@media (prefers-reduced-motion: reduce)': {
            '&::before': {
              animation: 'none',
              background: 'linear-gradient(135deg, #EB0000 0%, #95008A 50%, #3300FC 100%)',
            },
          },
        }}
      >
        <Box
          sx={{
            flex: { xs: '0 0 30%', md: '0 0 38%' },
            minHeight: { xs: 392, md: 396 },
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            p: { xs: '16px 0 0', md: '20px 0 0' },
            bgcolor: '#FDF8F2',
          }}
        >
          <Box
            component="img"
            src={panel.image}
            alt={panel.imageAlt}
            sx={{
              width: { xs: '118%', md: '112.5%' },
              maxHeight: { xs: 344, md: 385 },
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 22px 26px rgba(58, 36, 21, 0.3))',
            }}
          />
        </Box>
        <Box
          sx={{
            flex: { xs: '0 0 70%', md: 1 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            bgcolor: '#FFFFFF',
            p: {
              xs: '22px 14px 22px',
              md: imageFirst ? '36px 36px 36px 28px' : '36px 28px 36px 36px',
            },
          }}
        >
          <Stack spacing={0} sx={{ transform: panel.textOffsetY ? `translateY(${panel.textOffsetY})` : 'none' }}>
            <Typography
              component="span"
              sx={{
                mb: 0.5,
                fontSize: panel.textSizeBoost ? { xs: 28, md: 54 } : { xs: 26, md: 52 },
                lineHeight: 1,
                fontWeight: 900,
                letterSpacing: 0,
                backgroundImage: 'linear-gradient(135deg, #E18C37, #F5C97A)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {panel.number}
            </Typography>
            <Box sx={{ display: 'inline-block', alignSelf: 'flex-start', maxWidth: '100%' }}>
              <Typography
                component="h2"
                sx={{
                  m: 0,
                  mb: panel.titleUnderlineGap ?? { xs: 1, md: 1.75 },
                  color: '#E18C37',
                  fontSize: panel.textSizeBoost ? { xs: 17, sm: 20, md: 30 } : { xs: 15, sm: 18, md: 28 },
                  lineHeight: { xs: 1.28, md: 1.4 },
                  fontWeight: 800,
                  letterSpacing: 0,
                  whiteSpace: 'pre-line',
                }}
              >
                {panel.title}
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  height: 2.5,
                  mb: { xs: 1.25, md: 2 },
                  borderRadius: 2,
                  background: 'linear-gradient(90deg, #E18C37, #F5C97A)',
                }}
              />
            </Box>
            {panel.paragraphs.map((paragraph) => (
              <Typography
                key={paragraph}
                component="p"
                sx={{
                  m: 0,
                  '& + &': { mt: { xs: 0.75, md: 1.25 } },
                  maxWidth: 760,
                  color: '#444444',
                  fontSize: panel.textSizeBoost ? { xs: 14, sm: 15, md: 21 } : { xs: 12, sm: 13, md: 19 },
                  lineHeight: { xs: 1.48, md: 1.85 },
                  fontWeight: 500,
                  textWrap: 'pretty',
                  whiteSpace: 'pre-line',
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

function ProblemSection() {
  return (
    <Box
        id="problem"
        component="section"
        sx={{
          ...sectionRoughEdgeSx({ showTop: false, showBottom: false }),
          py: { xs: 8, md: 12 },
          bgcolor: 'background.default',
        scrollMarginTop: 96,
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <SectionHeading
          eyebrow="첫번째는 감정을 이해해야한다."
          eyebrowFontSize={{ xs: 16, md: 18 }}
          eyebrowImage={webnudgeWorryHover}
          eyebrowImageAlt=""
          sx={{ pl: { xs: 1.5, md: 2.5 } }}
          titleLineGap="10px"
          titleLineHeight={{ xs: 1.2, md: 'calc(1em + 20px)' }}
          title={(
            <>
              <Box component="span" sx={{ display: { xs: 'none', md: 'inline' } }}>
                방문자의 관심을 끌기위해서는
                <br />
                단계적 시스템이 필요합니다.
              </Box>
              <Box component="span" sx={{ display: { xs: 'inline', md: 'none' } }}>
                방문자의 관심을
                <br />
                끌기위해서는
                <br />
                단계적 시스템이
                <br />
                필요합니다.
              </Box>
            </>
          )}
          description="방문자의 관심을 끌기 위해서는 단계적 디자인 시스템이 필요합니다."
        />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
            gap: { xs: 2, md: '3.5%' },
            mt: { xs: 3.5, md: 4 },
          }}
        >
          {problemSectionCards.map((problem) => (
            <Box
              key={problem.title}
              sx={{
                minWidth: 0,
                minHeight: { xs: 286, md: 318 },
                border: '1px solid transparent',
                borderRadius: '14px',
                backgroundImage: 'linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(109deg, rgba(160,24,80,1) 11.2%, rgba(201,138,75,1) 81.7%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                p: { xs: '24px 20px 20px', md: '26px 22px 22px' },
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 18px 45px rgba(58, 36, 21, 0.04)',
              }}
            >
              <ScrollRevealStack
                direction="row"
                alignItems="center"
                spacing={1.25}
                sx={{
                  mb: 2.5,
                }}
              >
                <Box
                  sx={{
                    width: 34,
                    height: 34,
                    flex: '0 0 34px',
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: '#FDF3E3',
                    color: '#B36E1E',
                    fontSize: 13,
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  {problem.number}
                </Box>
                <Divider sx={{ flex: 1, borderColor: '#F0DFC0' }} />
              </ScrollRevealStack>
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: '12px',
                  display: 'grid',
                  placeItems: 'center',
                  mb: 1.75,
                  bgcolor: '#FDF3E3',
                  color: '#E18C37',
                }}
              >
                <problem.Icon sx={{ fontSize: 28 }} />
              </Box>
              <Typography
                variant="overline"
                sx={{
                  mb: 0.875,
                  color: '#E18C37',
                  fontSize: 9,
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: '0.14em',
                }}
              >
                {problem.label}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 1.25,
                  color: '#111111',
                  fontSize: { xs: 16, md: 18 },
                  fontWeight: 800,
                  lineHeight: 1.35,
                  whiteSpace: 'pre-line',
                }}
              >
                {problem.title}
              </Typography>
              <Box
                sx={{
                  width: 28,
                  height: 2,
                  borderRadius: 1,
                  mb: 1.625,
                  bgcolor: '#E18C37',
                }}
              />
              <Typography
                sx={{
                  flex: 1,
                  color: '#666666',
                  fontSize: { xs: 13, md: 14 },
                  lineHeight: 1.75,
                  '& strong': {
                    color: '#222222',
                    fontWeight: 800,
                  },
                }}
              >
                {problem.description}
              </Typography>
              <Box
                sx={{
                  mt: 2.5,
                  pt: 1.75,
                  borderTop: '0.5px solid',
                  borderColor: '#F0DFC0',
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.3125,
                    px: 2.625,
                    py: 1.875,
                    borderRadius: 999,
                    backgroundImage: 'linear-gradient(90deg, #D70652 0%, #FF025E 100%)',
                    color: '#FFFFFF',
                    fontSize: 11,
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  <InfoOutlinedIcon sx={{ fontSize: 12 }} />
                  {problem.tag}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function NudgeStorySection({ activeStep, onStepChange }) {
  const isBeforeStep = activeStep === 0;
  const isNudgeStep = activeStep === 1;
  const isAfterStep = activeStep === 2;
  const isServicesStep = activeStep === 3;
  const previewHtml = isBeforeStep
    ? notNudgePreviewHtml
    : isNudgeStep
      ? nudgeSystemPreviewHtml
      : isAfterStep
        ? yesNudgePreviewHtml
        : isServicesStep
          ? servicesSectionPreviewHtml
          : null;

  return (
    <Box
        id="nudge-story"
        component="section"
        sx={{
          ...sectionRoughEdgeSx({ top: 'background.default', showBottom: false }),
          py: { xs: 7, md: 10 },
        background: nudgeSectionGradient,
        color: 'secondary.contrastText',
      }}
    >
        <Container maxWidth="xl">
        <SectionHeading
          eyebrow="차이를 확인하세요!"
          eyebrowFontSize={18}
          eyebrowImage={webnudgeSympathyPair}
          eyebrowImageSize={{ xs: 128, md: 246 }}
          eyebrowImageBottomOffset={{ xs: 'calc(-0.18em - 8px)', md: 'calc(-0.18em - 20px)' }}
          eyebrowImageTransform={{ xs: 'translate(-10px, 3px)', md: 'translate(-20px, 5px)' }}
          title={(
            <>
              넛지시스템 적용
              <br />
              전 VS 후 비교!
            </>
          )}
          description="넛지시스템을 접목한 웹사이트를 만들어보세요!"
          descriptionFontSize={18}
          isInverted
        />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '320px 1fr' },
            gap: 3,
            mt: 4,
          }}
        >
          <Stack spacing={1}>
            {nudgeStorySteps.map((step, index) => {
              const isNudgeStep = step.label === 'Nudge';
              const isActive = activeStep === index;

              return (
                <Button
                  key={step.label}
                  onClick={() => onStepChange(index)}
                  {...homepageButtonProps}
                  aria-pressed={isActive}
                  sx={{
                    justifyContent: 'space-between',
                    ...(isActive ? activeHomepageButtonSx : {}),
                    ...(!isActive ? {
                      borderColor: '#FFFFFF',
                      color: '#FFFFFF',
                      '& .MuiButton-endIcon, & .MuiSvgIcon-root': {
                        color: '#FFFFFF',
                      },
                    } : {}),
                    '& .nudge-short-label': {
                      display: isActive && isNudgeStep ? 'none' : 'inline',
                    },
                    '& .nudge-applied-label': {
                      display: isActive && isNudgeStep ? 'inline' : 'none',
                    },
                    '&:hover .nudge-short-label, &:focus-visible .nudge-short-label': {
                      display: isNudgeStep ? 'none' : undefined,
                    },
                    '&:hover .nudge-applied-label, &:focus-visible .nudge-applied-label': {
                      display: isNudgeStep ? 'inline' : undefined,
                    },
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  {isNudgeStep ? (
                    <Box component="span">
                      <Box component="span" className="nudge-short-label">Nudge</Box>
                      <Box component="span" className="nudge-applied-label">Nudge를 적용하면?</Box>
                    </Box>
                  ) : step.label}
                </Button>
              );
            })}
          </Stack>
          <Box
            sx={{
              bgcolor: 'background.paper',
              color: 'text.primary',
              borderRadius: 4,
              p: { xs: 3, md: 5 },
              minHeight: { xs: 520, md: 560 },
              display: 'grid',
              alignContent: previewHtml ? 'start' : 'space-between',
              gap: previewHtml ? 3 : 0,
            }}
          >
            {previewHtml ? null : (
              <BrandMascot
                size={156}
                alt=""
                sx={{
                  justifySelf: 'end',
                  mb: -8,
                  opacity: 0.95,
                  display: { xs: 'none', sm: 'block' },
                }}
              />
            )}
            <Stack spacing={2}>
              <Chip
                label={nudgeStorySteps[activeStep].metric}
                sx={{
                  alignSelf: 'flex-start',
                  width: 100,
                  height: 30,
                  minWidth: 100,
                  minHeight: 30,
                  color: '#FFFFFF',
                  bgcolor: '#c21500',
                  backgroundImage: 'linear-gradient(90deg, #c21500 0%, #ffc500 100%)',
                  fontSize: 12,
                  fontWeight: 800,
                  lineHeight: 1,
                  '& .MuiChip-label': {
                    px: 0,
                  },
                }}
              />
              <Typography variant="h3" sx={{ fontSize: { xs: 31, md: 43 }, lineHeight: 1.28, whiteSpace: 'pre-line' }}>
                {nudgeStorySteps[activeStep].title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
                {nudgeStorySteps[activeStep].detail}
              </Typography>
            </Stack>
            {previewHtml ? (
              <Box
                sx={{
                  height: isServicesStep ? { xs: 620, md: 700 } : { xs: 360, md: 430 },
                  overflow: isServicesStep ? 'hidden' : 'auto',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: isNudgeStep || isServicesStep ? '#ffffff' : '#0a0a0a',
                  boxShadow: '0 18px 44px rgba(0, 0, 0, 0.16)',
                }}
              >
                <Box
                  component="iframe"
                  title={
                    isServicesStep
                      ? '넛지 시스템 적용 가능 범위'
                      : isAfterStep
                        ? '넛지 디자인 적용 후 홈페이지 예시'
                        : isNudgeStep
                          ? '넛지 시스템 적용 과정 예시'
                          : '넛지 디자인 적용 전 홈페이지 예시'
                  }
                  srcDoc={previewHtml}
                  sx={{
                    display: 'block',
                    width: isNudgeStep ? { xs: '100%', md: 940 } : '100%',
                    minWidth: '100%',
                    height: isNudgeStep ? { xs: 560, md: 760 } : isServicesStep ? '100%' : '100%',
                    minHeight: '100%',
                    border: 0,
                    bgcolor: isNudgeStep || isServicesStep ? '#ffffff' : '#0a0a0a',
                  }}
                />
              </Box>
            ) : (
              <Button href="#solution" {...homepageButtonProps} sx={{ justifySelf: 'flex-start', mt: 4 }}>
                해결 방식 보기
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function PortfolioSection() {
  const [activeShowcaseIndex, setActiveShowcaseIndex] = useState(getDefaultPortfolioShowcaseIndex);
  const [openPortfolioGroupId, setOpenPortfolioGroupId] = useState(null);
  const [portfolioBurstId, setPortfolioBurstId] = useState(null);
  const [isPortfolioChromeRevealed, setIsPortfolioChromeRevealed] = useState(false);
  const portfolioBurstCounterRef = useRef(0);
  const portfolioChromeRef = useRef(null);
  const activeShowcase = portfolioShowcases[activeShowcaseIndex];

  useEffect(() => {
    const element = portfolioChromeRef.current;

    if (!element) {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reducedMotionQuery.matches || typeof IntersectionObserver === 'undefined') {
      setIsPortfolioChromeRevealed(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPortfolioChromeRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.35 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!portfolioBurstId) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setPortfolioBurstId(null);
    }, 720);

    return () => window.clearTimeout(timeoutId);
  }, [portfolioBurstId]);

  const handlePortfolioButtonClick = (nextIndex, burstId) => {
    portfolioBurstCounterRef.current += 1;
    setActiveShowcaseIndex(nextIndex);
    setPortfolioBurstId(`${burstId}-${portfolioBurstCounterRef.current}`);
  };

  const handlePortfolioGroupToggle = (group) => {
    const isOpen = openPortfolioGroupId === group.id;

    portfolioBurstCounterRef.current += 1;
    setOpenPortfolioGroupId(isOpen ? null : group.id);
    setPortfolioBurstId(`portfolio-group-${group.id}-${portfolioBurstCounterRef.current}`);

    if (!isOpen) {
      setActiveShowcaseIndex(group.sampleIndexes[0]);
    }
  };

  const renderButtonFireworks = (burstId) => (
    portfolioBurstId?.startsWith(`${burstId}-`) ? (
      <Box className="portfolio-fireworks" aria-hidden="true">
        {[
          ['0px', '-34px', '#ffc500'],
          ['28px', '-22px', '#ffffff'],
          ['34px', '4px', '#c21500'],
          ['18px', '30px', '#ffc500'],
          ['-18px', '30px', '#ffffff'],
          ['-34px', '4px', '#c21500'],
          ['-28px', '-22px', '#ffc500'],
          ['0px', '34px', '#ffffff'],
        ].map(([x, y, color]) => (
          <Box
            key={`${x}-${y}`}
            component="span"
            className="portfolio-firework-dot"
            sx={{ '--firework-x': x, '--firework-y': y, bgcolor: color }}
          />
        ))}
      </Box>
    ) : null
  );

  const portfolioButtonSx = {
    position: 'relative',
    overflow: 'visible',
    borderRadius: '4px',
    color: '#FFFFFF',
    borderColor: 'rgba(255, 255, 255, 0.72)',
    '&:hover, &:focus-visible': {
      borderColor: '#FFFFFF',
      bgcolor: 'rgba(255, 255, 255, 0.1)',
    },
    '& .portfolio-button-label': {
      position: 'relative',
      zIndex: 2,
    },
    '& .portfolio-fireworks': {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      overflow: 'visible',
      zIndex: 3,
    },
    '& .portfolio-firework-dot': {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: 5,
      height: 5,
      borderRadius: '50%',
      opacity: 0,
      animation: 'portfolioFirework 680ms ease-out forwards',
      willChange: 'transform, opacity',
    },
    '@keyframes portfolioFirework': {
      '0%': {
        opacity: 1,
        transform: 'translate(-50%, -50%) scale(0.45)',
      },
      '68%': {
        opacity: 1,
      },
      '100%': {
        opacity: 0,
        transform: 'translate(calc(-50% + var(--firework-x)), calc(-50% + var(--firework-y))) scale(1)',
      },
    },
    '@media (prefers-reduced-motion: reduce)': {
      '& .portfolio-firework-dot': {
        animation: 'none',
        display: 'none',
      },
    },
  };

  const portfolioChromeDotSx = (delayMs) => ({
    opacity: { xs: 1, md: isPortfolioChromeRevealed ? 1 : 0 },
    transform: {
      xs: 'none',
      md: isPortfolioChromeRevealed ? 'translateX(0)' : 'translateX(-18px)',
    },
    transition: 'opacity 520ms cubic-bezier(0.16, 1, 0.3, 1), transform 520ms cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: { xs: '0ms', md: `${delayMs}ms` },
    willChange: isPortfolioChromeRevealed ? 'auto' : 'opacity, transform',
    '@media (prefers-reduced-motion: reduce)': {
      opacity: 1,
      transform: 'none',
      transition: 'none',
    },
  });

  return (
    <Box
        id="portfolio"
        component="section"
        sx={{
          ...sectionRoughEdgeSx({ top: nudgeSectionGradient, showBottom: false }),
          py: { xs: 7, md: 10 },
        backgroundImage: portfolioSectionGradient,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) 420px' },
            gap: { xs: 3, md: 4 },
            alignItems: 'end',
            mb: 3,
          }}
          >
            <SectionHeading
              eyebrow={(
                <Box
                  component="span"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'flex-end',
                    gap: 1,
                    lineHeight: 1,
                    position: 'relative',
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      position: 'relative',
                      zIndex: 2,
                    }}
                  >
                      넛지웹스튜디오
                  </Box>
                  <Box
                    component="img"
                    src={webnudgeSmallMascot}
                    alt=""
                    aria-hidden="true"
                    sx={{
                      width: { xs: 96, md: 150 },
                      height: { xs: 96, md: 150 },
                      objectFit: 'contain',
                      flex: '0 0 auto',
                      mb: '-0.22em',
                      position: 'relative',
                      zIndex: 1,
                      transform: { xs: 'translate(-20px, 28px)', md: 'translate(-35px, 45px)' },
                      mixBlendMode: 'normal',
                    }}
                  />
                </Box>
              )}
              eyebrowFontSize={18}
              title={'고객의 목적을\n이루는 홈페이지'}
            description={(
              <>
                섹션 탭을 따라 원하는 홈페이지 샘플을
                <br />
                화면에서 보기 or 새창에서 보기 둘다 가능합니다.
              </>
            )}
            isInverted
          />

          <Stack
            component="nav"
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            sx={{
              justifySelf: { xs: 'stretch', md: 'end' },
              width: { xs: '100%', sm: 420 },
              alignItems: 'stretch',
            }}
          >
            {portfolioGroups.map((group) => {
              const isGroupActive = group.sampleIndexes.includes(activeShowcaseIndex);
              const isGroupOpen = openPortfolioGroupId === group.id;

              return (
                <Box
                  key={group.id}
                  sx={{
                    position: 'relative',
                    flex: '1 1 0',
                    minWidth: 0,
                  }}
                >
                  <Button
                    type="button"
                    onClick={() => handlePortfolioGroupToggle(group)}
                    {...homepageButtonProps}
                    aria-pressed={isGroupActive}
                    aria-expanded={isGroupOpen}
                    sx={{
                      ...portfolioButtonSx,
                      width: '100%',
                      minWidth: '100%',
                      ...(isGroupActive ? activeHomepageButtonSx : {}),
                      borderRadius: '4px',
                    }}
                  >
                    <Box component="span" className="portfolio-button-label">{group.label}</Box>
                    {renderButtonFireworks(`portfolio-group-${group.id}`)}
                  </Button>
                  <Stack
                    className="portfolio-submenu"
                    spacing={0.75}
                    sx={{
                      position: 'static',
                      minWidth: '100%',
                      maxHeight: isGroupOpen ? 220 : 0,
                      mt: isGroupOpen ? 0.75 : 0,
                      opacity: isGroupOpen ? 1 : 0,
                      overflow: 'hidden',
                      visibility: isGroupOpen ? 'visible' : 'hidden',
                      pointerEvents: isGroupOpen ? 'auto' : 'none',
                      transform: isGroupOpen ? 'translateY(0)' : 'translateY(-6px)',
                      transition: 'max-height 220ms ease, margin-top 220ms ease, opacity 180ms ease, transform 180ms ease, visibility 180ms ease',
                      zIndex: 8,
                    }}
                  >
                    {group.sampleIndexes.map((sampleIndex) => {
                      const showcase = portfolioShowcases[sampleIndex];
                      const isActive = activeShowcaseIndex === sampleIndex;
                      const burstId = `portfolio-sample-${sampleIndex}`;

                      return (
                        <Button
                          key={showcase.url}
                          type="button"
                          onClick={() => handlePortfolioButtonClick(sampleIndex, burstId)}
                          {...homepageButtonProps}
                          aria-pressed={isActive}
                          sx={{
                            ...portfolioButtonSx,
                            justifyContent: 'flex-start',
                            minWidth: '100%',
                            px: 1.5,
                            py: 0.75,
                            bgcolor: 'rgba(20, 30, 48, 0.92)',
                            ...(isActive ? activeHomepageButtonSx : {}),
                            borderRadius: '4px',
                          }}
                        >
                          <Box component="span" className="portfolio-button-label">{showcase.tab}</Box>
                          {renderButtonFireworks(burstId)}
                        </Button>
                      );
                    })}
                  </Stack>
                </Box>
              );
            })}
          </Stack>
        </Box>

        <Box
          sx={{
            borderRadius: 3,
            bgcolor: 'background.paper',
            overflow: 'hidden',
            boxShadow: '0 24px 70px rgba(58, 36, 21, 0.1)',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            spacing={0}
            sx={{
              borderBottom: '1px solid',
              borderColor: 'divider',
              bgcolor: '#FFFFFF',
            }}
          >
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                flex: 1,
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 900,
                  letterSpacing: '0.14em',
                }}
              >
                {activeShowcase.eyebrow}
              </Typography>
              <Stack spacing={2}>
                <Typography
                  variant="h3"
                  sx={{
                    maxWidth: 760,
                    fontSize: { xs: 24, sm: 30, md: 40 },
                    whiteSpace: 'nowrap',
                  }}
                >
                  {activeShowcase.title}
                </Typography>
                <Typography color="text.secondary" sx={{ maxWidth: 760 }}>
                  {activeShowcase.description}
                </Typography>
              </Stack>
            </Box>
            <Stack
              ref={portfolioChromeRef}
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                p: { xs: 3, lg: 4 },
                pt: { xs: 0, lg: 4 },
                width: { xs: '100%', lg: 320 },
                justifyContent: 'flex-end',
                flexWrap: 'wrap',
                gap: 1,
                '& .MuiButton-root': {
                  flex: '0 0 auto',
                },
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: '#FF6B5F',
                  ...portfolioChromeDotSx(0),
                }}
              />
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: '#F2C94C',
                  ...portfolioChromeDotSx(130),
                }}
              />
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: '#5DCAA5',
                  ...portfolioChromeDotSx(260),
                }}
              />
              <Button
                href={activeShowcase.url}
                target="_blank"
                rel="noreferrer"
                {...homepageButtonProps}
                onClick={() => setPortfolioBurstId(`portfolio-new-window-${Date.now()}`)}
                sx={{
                  ...portfolioButtonSx,
                  ml: 'auto',
                  width: 120,
                  minWidth: 120,
                  px: 0,
                  color: 'secondary.main',
                  borderColor: 'secondary.main',
                  '&:hover, &:focus-visible': {
                    borderColor: 'primary.main',
                    bgcolor: 'rgba(225, 140, 55, 0.08)',
                  },
                }}
              >
                <Box component="span" className="portfolio-button-label">새 창에서 보기</Box>
                {renderButtonFireworks('portfolio-new-window')}
              </Button>
            </Stack>
          </Stack>
          <Box
            id="portfolio-preview"
            sx={{
              height: { xs: 560, md: 720 },
              bgcolor: '#F7F3EA',
              overflow: 'hidden',
            }}
          >
            <Box
              key={activeShowcase.url}
              component="iframe"
              title={`${activeShowcase.title} 미리보기`}
              src={activeShowcase.url}
              loading="lazy"
              sx={{
                display: 'block',
                width: '100%',
                height: '100%',
                border: 0,
                bgcolor: '#FFFFFF',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function FaqSection() {
  return (
    <Box
        id="faq"
        component="section"
        sx={{
          ...sectionRoughEdgeSx({ top: portfolioSectionGradient, showBottom: false }),
          py: { xs: 7, md: 10 },
        bgcolor: 'transparent',
      }}
    >
      <Container maxWidth="md">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2.5, sm: 3 }}
          alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
          justifyContent="space-between"
        >
          <SectionHeading
            eyebrow={(
              <Box
                component="span"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'flex-end',
                  gap: 0.75,
                  lineHeight: 1,
                }}
              >
                <Box component="span" sx={{ lineHeight: 1, position: 'relative', zIndex: 1 }}>FAQ</Box>
                <BrandMascot
                  size={{ xs: 117, sm: 162 }}
                  alt=""
                  sx={{
                    flex: '0 0 auto',
                    mb: '-6px',
                    position: 'relative',
                    zIndex: 3,
                    transform: 'scaleX(-1) translate(0, 28px)',
                  }}
                />
              </Box>
            )}
            eyebrowFontSize={18}
            title="상담 전에 자주 묻는 질문"
            titleFontSize={{ xs: 33, md: 55 }}
            description="PRD의 서비스 소개, 포트폴리오, 확장성 요구를 기준으로 답변을 정리했습니다."
          />
        </Stack>
        <Stack spacing={1.5} sx={{ mt: 4 }}>
          {faqs.map((faq) => (
              <Accordion
                key={faq.question}
                disableGutters
                sx={{
                  position: 'relative',
                  borderRadius: '18px !important',
                  boxShadow: 'none',
                  bgcolor: 'background.paper',
                  '&::before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    minHeight: 64,
                    px: { xs: 2.25, sm: 3 },
                    borderLeft: '2px solid #155799',
                    borderRight: '2px solid #155799',
                    borderBottom: '2px solid #159957',
                    borderTop: 0,
                    borderRadius: '0 0 18px 18px',
                    color: 'text.primary',
                    transition: 'background 180ms ease, color 180ms ease, border-color 180ms ease',
                    '&.Mui-expanded': {
                      minHeight: 64,
                      borderRadius: '0 0 18px 18px',
                    },
                    '@media (min-width:900px)': {
                      '&:hover, &:focus-visible, &.Mui-expanded': {
                        backgroundImage: 'linear-gradient(135deg, #155799 0%, #159957 100%)',
                        borderLeftColor: 'transparent',
                        borderRightColor: 'transparent',
                        borderBottomColor: 'transparent',
                        color: '#FFFFFF',
                        boxShadow: '0 16px 36px rgba(21, 87, 153, 0.18)',
                      },
                      '&:hover .MuiTypography-root, &:focus-visible .MuiTypography-root, &.Mui-expanded .MuiTypography-root, &:hover .MuiSvgIcon-root, &:focus-visible .MuiSvgIcon-root, &.Mui-expanded .MuiSvgIcon-root': {
                        color: '#FFFFFF',
                      },
                    },
                    '& .MuiAccordionSummary-content': {
                      my: 1.5,
                    },
                }}
              >
                <Typography sx={{ width: '100%', fontSize: 15, fontWeight: 900, textAlign: 'center', whiteSpace: 'nowrap' }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  minHeight: { xs: 150, sm: 172 },
                  px: { xs: 2.25, sm: 3 },
                  py: { xs: 3, sm: 3.5 },
                }}
              >
                <Typography color="text.secondary" sx={{ fontSize: 20, lineHeight: 1.7 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

function ContactSection() {
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        ...sectionRoughEdgeSx({ top: 'background.default', bottom: contactSectionGradient, showBottom: false }),
        py: { xs: 7, md: 10 },
        background: contactSectionGradient,
        color: 'secondary.contrastText',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1.4fr) minmax(0, 1.6fr)' },
            gap: { xs: 4, md: 8 },
            alignItems: 'center',
          }}
        >
            <Stack spacing={3}>
              <SectionHeading
                eyebrow={(
                  <Box
                    component="span"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'flex-end',
                      gap: { xs: 0.25, sm: 0.5 },
                      lineHeight: 1,
                    }}
                  >
                    <Box component="span">결정을 할 시간!</Box>
                    <Box
                      component="img"
                        src={webnudgeActionHover}
                        alt=""
                        aria-hidden="true"
                        sx={{
                        width: { xs: 150, sm: 220, md: 288 },
                          height: 'auto',
                          display: 'block',
                          borderRadius: 2,
                          transform: { xs: 'translate(-18px, 12px)', sm: 'translate(-30px, 22px)', md: 'translate(-32px, 24px)' },
                        }}
                      />
                  </Box>
                )}
                eyebrowFontSize={18}
                titleLineGap="5px"
                title={(
                <>
                  <Box
                    component="span"
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'flex-end',
                        gap: { xs: 1.25, md: 2 },
                        whiteSpace: { xs: 'normal', lg: 'nowrap' },
                      }}
                  >
                    고객의 행동을 유도해
                  </Box>
                  <br />
                  결제까지 이어지는
                  <br />
                  웹사이트를 원한다면?
                </>
              )}
              description="망설이지말고 넛지시스템 전문가에게 맡겨보세요!"
              isInverted
            />
            <Stack spacing={1.5}>
              <Typography><Box component="span" sx={{ fontWeight: 800 }}>Email:</Box> blockball999@gmail.com</Typography>
              <Typography><Box component="span" sx={{ fontWeight: 800 }}>Phone:</Box> 010-4963-8734</Typography>
              <Typography><Box component="span" sx={{ fontWeight: 800 }}>Office:</Box> changwon city, korea</Typography>
            </Stack>
          </Stack>
          <Box
            sx={{
              minHeight: { xs: 180, lg: 696 },
              display: 'grid',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            {isContactFormVisible ? (
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 760,
                  justifySelf: { xs: 'stretch', lg: 'end' },
                  transformOrigin: 'top center',
                  animation: 'contactFormPaperOpen 720ms cubic-bezier(0.2, 0.88, 0.24, 1) both',
                  '@keyframes contactFormPaperOpen': {
                    '0%': {
                      opacity: 0,
                      maxHeight: 0,
                      transform: 'translateY(-24px) scaleY(0.08) rotateX(-18deg)',
                      filter: 'drop-shadow(0 2px 0 rgba(255, 255, 255, 0.55))',
                    },
                    '55%': {
                      opacity: 1,
                      maxHeight: 780,
                      transform: 'translateY(8px) scaleY(1.03) rotateX(2deg)',
                    },
                    '100%': {
                      opacity: 1,
                      maxHeight: 780,
                      transform: 'translateY(0) scaleY(1) rotateX(0deg)',
                      filter: 'drop-shadow(0 26px 70px rgba(0, 0, 0, 0.26))',
                    },
                  },
                }}
              >
                <Button
                  type="button"
                  aria-label="문의하기 양식 닫기"
                  onClick={() => setIsContactFormVisible(false)}
                  sx={{
                    position: 'absolute',
                    top: 14,
                    right: 14,
                    zIndex: 2,
                    minWidth: 42,
                    width: 42,
                    height: 42,
                    p: 0,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255, 255, 255, 0.92)',
                    color: 'secondary.main',
                    boxShadow: '0 10px 26px rgba(0, 0, 0, 0.16)',
                    '&:hover, &:focus-visible': {
                      bgcolor: '#FFFFFF',
                      color: 'primary.main',
                    },
                  }}
                >
                  <CloseIcon fontSize="small" />
                </Button>
                <Box
                  component="iframe"
                  title="웹 에이전시 문의하기 양식"
                  srcDoc={contactFormPreviewHtml}
                  sx={{
                    display: 'block',
                    width: '100%',
                    height: { xs: 760, md: 720 },
                    border: 0,
                    borderRadius: 4,
                    bgcolor: 'transparent',
                  }}
                />
              </Box>
            ) : (
                <Button
                  type="button"
                  onClick={() => setIsContactFormVisible(true)}
                  sx={{
                    position: 'relative',
                    overflow: 'visible',
                    width: '100%',
                    maxWidth: 760,
                    minHeight: { xs: 72, md: 92 },
                  justifySelf: { xs: 'stretch', lg: 'end' },
                  borderRadius: 999,
                  border: '2px solid transparent',
                  bgcolor: '#FFFFFF',
                  color: 'secondary.main',
                    fontSize: { xs: 18, sm: 22, md: 30 },
                    fontWeight: 900,
                    boxShadow: '0 26px 70px rgba(0, 0, 0, 0.24)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: -2,
                      borderRadius: 'inherit',
                      padding: '2px',
                      background: 'linear-gradient(135deg, transparent 0%, #EB0000 16%, #95008A 28%, #3300FC 40%, transparent 56%, transparent 100%)',
                      backgroundSize: '260% 260%',
                      animation: 'contactCtaElectricBorder 2.4s linear infinite',
                      WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      pointerEvents: 'none',
                      zIndex: 1,
                    },
                    '& .contact-cta-label': {
                      position: 'relative',
                      zIndex: 2,
                    },
                      '& .contact-cta-peanut': {
                        position: 'absolute',
                        left: { xs: 16, md: 42 },
                        bottom: { xs: -12, md: -22 },
                        width: { xs: 78, md: 132 },
                        height: { xs: 78, md: 132 },
                        objectFit: 'contain',
                        opacity: 0,
                        zIndex: 3,
                      pointerEvents: 'none',
                      transform: 'translateX(-120px) translateY(0) rotate(-540deg) scale(0.76)',
                      transformOrigin: '50% 78%',
                    },
                    '&:hover, &:focus-visible': {
                      bgcolor: '#FFFFFF',
                      transform: 'translateY(-2px)',
                    },
                    '&:hover .contact-cta-peanut, &:focus-visible .contact-cta-peanut': {
                      animation: 'contactCtaPeanutRollJump 980ms cubic-bezier(0.18, 0.82, 0.2, 1) forwards',
                    },
                    '@keyframes contactCtaPeanutRollJump': {
                      '0%': {
                        opacity: 0,
                        transform: 'translateX(-120px) translateY(0) rotate(-540deg) scale(0.76)',
                      },
                      '18%': {
                        opacity: 1,
                        },
                        '62%': {
                          opacity: 1,
                          transform: 'translateX(-4px) translateY(0) rotate(18deg) scale(0.9)',
                        },
                        '78%': {
                          opacity: 1,
                          transform: 'translateX(18px) translateY(-22px) rotate(28deg) scale(1.04)',
                        },
                        '100%': {
                          opacity: 1,
                          transform: 'translateX(8px) translateY(0) rotate(0deg) scale(1)',
                        },
                    },
                    '@keyframes contactCtaElectricBorder': {
                      '0%': {
                        backgroundPosition: '0% 100%',
                      },
                      '50%': {
                        backgroundPosition: '100% 0%',
                      },
                      '100%': {
                        backgroundPosition: '0% 100%',
                      },
                    },
                    '@media (prefers-reduced-motion: reduce)': {
                      '&::before': {
                        animation: 'none',
                        background: 'linear-gradient(135deg, #EB0000 0%, #95008A 50%, #3300FC 100%)',
                      },
                      '&:hover .contact-cta-peanut, &:focus-visible .contact-cta-peanut': {
                        animation: 'none',
                        opacity: 1,
                        transform: 'translateX(8px) translateY(0) rotate(0deg) scale(1)',
                      },
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={webnudgeLogo}
                    alt=""
                    className="contact-cta-peanut"
                    aria-hidden="true"
                  />
                  <Box component="span" className="contact-cta-label">
                    사장님의 매출을 올려보세요!
                  </Box>
                </Button>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

/**
 * SectionHeading 컴포넌트
 *
 * Props:
 * @param {string} eyebrow - 섹션 보조 라벨 [Required]
 * @param {string} title - 섹션 제목 [Required]
 * @param {string} description - 섹션 설명 [Required]
 * @param {boolean} isInverted - 어두운 배경 위에서 사용하는지 여부 [Optional, 기본값: false]
 * @param {number} eyebrowFontSize - 보조 라벨 텍스트 크기 [Optional]
 * @param {number} descriptionFontSize - 설명 텍스트 크기 [Optional, 기본값: 21]
 *
 * Example usage:
 * <SectionHeading eyebrow="Services" title="제목" description="설명" />
 */
function SectionHeading({
  eyebrow,
  title,
  description,
  isInverted = false,
  eyebrowFontSize,
  eyebrowImage,
  eyebrowImageAlt = '',
  eyebrowImageSize = { xs: 96, md: 264 },
  eyebrowImageBottomOffset = '0.08em',
  eyebrowImageTransform,
  titleLineGap,
  titleLineHeight,
  titleFontSize,
  descriptionFontSize = 21,
  sx,
}) {
  return (
    <Stack spacing={1.5} sx={{ maxWidth: 860, minWidth: 0, ...sx }}>
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'flex-end',
          gap: 0.75,
          maxWidth: '100%',
          width: 'fit-content',
        }}
      >
        <Typography
          variant="overline"
          color={isInverted ? 'primary.light' : 'primary.main'}
          sx={{ fontWeight: 900, ...(eyebrowFontSize ? { fontSize: eyebrowFontSize } : {}) }}
        >
          {eyebrow}
        </Typography>
        {eyebrowImage ? (
          <Box
            component="img"
            src={eyebrowImage}
            alt={eyebrowImageAlt}
            aria-hidden={eyebrowImageAlt ? undefined : 'true'}
            sx={{
              display: 'block',
              width: eyebrowImageSize,
              height: eyebrowImageSize,
              objectFit: 'contain',
              mb: eyebrowImageBottomOffset,
              ...(eyebrowImageTransform ? { transform: eyebrowImageTransform } : {}),
            }}
          />
        ) : null}
      </Box>
      <Typography
        variant="h2"
        sx={{
          fontSize: titleFontSize ?? { xs: 36, md: 58 },
          overflowWrap: 'break-word',
          lineHeight: titleLineHeight ?? (titleLineGap ? `calc(1em + ${titleLineGap} + 10px)` : 'calc(1em + 10px)'),
          color: isInverted ? 'common.white' : 'text.primary',
          whiteSpace: 'pre-line',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color={isInverted ? 'grey.300' : 'text.secondary'}
        sx={{
          fontSize: typeof descriptionFontSize === 'number'
            ? { xs: Math.min(descriptionFontSize, 17), md: descriptionFontSize }
            : descriptionFontSize,
          overflowWrap: 'break-word',
        }}
      >
        {description}
      </Typography>
    </Stack>
  );
}

export default NudgeAgencyPage;

