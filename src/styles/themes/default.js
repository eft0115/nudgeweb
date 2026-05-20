import { createTheme } from '@mui/material/styles';

const dimmedShadows = [
  'none',
  '0 0 8px rgba(0, 0, 0, 0.08)',
  '0 0 16px rgba(0, 0, 0, 0.08)',
  '0 0 24px rgba(0, 0, 0, 0.08)',
  '0 0 32px rgba(0, 0, 0, 0.08)',
  '0 0 40px rgba(0, 0, 0, 0.08)',
  '0 0 48px rgba(0, 0, 0, 0.08)',
  '0 0 56px rgba(0, 0, 0, 0.08)',
  '0 0 64px rgba(0, 0, 0, 0.08)',
  '0 0 72px rgba(0, 0, 0, 0.08)',
  '0 0 80px rgba(0, 0, 0, 0.08)',
  '0 0 88px rgba(0, 0, 0, 0.08)',
  '0 0 96px rgba(0, 0, 0, 0.08)',
  '0 0 104px rgba(0, 0, 0, 0.08)',
  '0 0 112px rgba(0, 0, 0, 0.08)',
  '0 0 120px rgba(0, 0, 0, 0.08)',
  '0 0 128px rgba(0, 0, 0, 0.08)',
  '0 0 136px rgba(0, 0, 0, 0.08)',
  '0 0 144px rgba(0, 0, 0, 0.08)',
  '0 0 152px rgba(0, 0, 0, 0.08)',
  '0 0 160px rgba(0, 0, 0, 0.08)',
  '0 0 168px rgba(0, 0, 0, 0.08)',
  '0 0 176px rgba(0, 0, 0, 0.08)',
  '0 0 184px rgba(0, 0, 0, 0.08)',
  '0 0 192px rgba(0, 0, 0, 0.08)',
];

export const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E18C37',
      dark: '#9F5A18',
      light: '#F8D7B1',
      contrastText: '#3A2415',
    },
    secondary: {
      main: '#3A2415',
      dark: '#211108',
      light: '#FBF4EC',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
      subtle: '#FBF4EC',
      inverse: '#3A2415',
      playful: '#FBF4EC',
    },
    accent: {
      yellow: '#E7C48E',
      mint: '#75E6B2',
      coral: '#E18C37',
    },
    text: {
      primary: '#3A2415',
      secondary: '#6F5B4A',
    },
    divider: '#F0C493',
    success: {
      main: '#00A36C',
      light: '#E7F6EF',
    },
  },
  typography: {
    fontFamily: '"Pretendard Variable", Pretendard, system-ui, sans-serif',
    h1: {
      fontFamily: 'Outfit, "Pretendard Variable", Pretendard, system-ui, sans-serif',
      fontWeight: 900,
      lineHeight: 0.95,
      letterSpacing: 0,
    },
    h2: {
      fontFamily: 'Outfit, "Pretendard Variable", Pretendard, system-ui, sans-serif',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: 0,
    },
    h3: {
      fontFamily: 'Outfit, "Pretendard Variable", Pretendard, system-ui, sans-serif',
      fontWeight: 800,
      lineHeight: 1.08,
      letterSpacing: 0,
    },
    h4: {
      fontWeight: 800,
      lineHeight: 1.18,
      letterSpacing: 0,
    },
    h5: {
      fontWeight: 800,
      lineHeight: 1.24,
      letterSpacing: 0,
    },
    h6: {
      fontWeight: 800,
      lineHeight: 1.32,
      letterSpacing: 0,
    },
    button: {
      fontWeight: 800,
      letterSpacing: 0,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 0,
  },
  shadows: dimmedShadows,
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          minHeight: 44,
          paddingInline: theme.spacing(2.5),
          '&.MuiButton-outlinedSecondary:hover': {
            '--variant-outlinedBg': theme.palette.primary.main,
            '--variant-outlinedBorder': theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.main,
            color: '#F3F0E9',
          },
        }),
        outlined: ({ theme }) => ({
          borderColor: theme.palette.primary.main,
          color: theme.palette.primary.dark,
          '&:hover': {
            borderColor: theme.palette.primary.dark,
            backgroundColor: theme.palette.primary.light,
          },
        }),
        outlinedSecondary: ({ theme }) => ({
          '&:hover': {
            '--variant-outlinedBg': theme.palette.primary.main,
            '--variant-outlinedBorder': theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.main,
            color: '#F3F0E9',
          },
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.divider,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontWeight: 700,
          '&.MuiChip-outlined': {
            borderColor: theme.palette.primary.main,
          },
        }),
      },
    },
  },
});
