import { createTheme } from '@material-ui/core';
import { pxToRem, pxToVh, pxToVw } from './themeUtils';

export const theme = createTheme({
  palette: {
    primaryColor: {
      red: '#F71735',
      gray: '#7D8CA3',
      black: '#001514',
      white: '#FBFEF9',
    },
  },
  typography: {
    pxToVw: (px) => pxToVw(px),
    pxToVh: (px) => pxToVh(px),
    pxToRem: (px) => pxToRem(px),
    fontFamily: 'Lato',
  },
  spacing: 5,
});

export default theme;
