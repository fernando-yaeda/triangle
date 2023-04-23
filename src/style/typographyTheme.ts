import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    displayLg: React.CSSProperties;
    displayMd: React.CSSProperties;
    headingLg: React.CSSProperties;
    headingMd: React.CSSProperties;
    headingSm: React.CSSProperties;
    textXl: React.CSSProperties;
    textLg: React.CSSProperties;
    textMd: React.CSSProperties;
    textSm: React.CSSProperties;
    textXs: React.CSSProperties;
    textXlRegular: React.CSSProperties;
    textLgRegular: React.CSSProperties;
    textMdRegular: React.CSSProperties;
    textSmRegular: React.CSSProperties;
    textXsRegular: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    displayLg?: React.CSSProperties;
    displayMd?: React.CSSProperties;
    headingLg?: React.CSSProperties;
    headingMd?: React.CSSProperties;
    headingSm?: React.CSSProperties;
    textXl?: React.CSSProperties;
    textLg?: React.CSSProperties;
    textMd?: React.CSSProperties;
    textSm?: React.CSSProperties;
    textXs?: React.CSSProperties;
    textXlRegular?: React.CSSProperties;
    textLgRegular?: React.CSSProperties;
    textMdRegular?: React.CSSProperties;
    textSmRegular?: React.CSSProperties;
    textXsRegular?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    displayLg: true;
    displayMd: true;
    headingLg: true;
    headingMd: true;
    headingSm: true;
    textXl: true;
    textLg: true;
    textMd: true;
    textSm: true;
    textXs: true;
    textXlRegular: true;
    textLgRegular: true;
    textMdRegular: true;
    textSmRegular: true;
    textXsRegular: true;
  }
}

export const typography = createTheme({
  typography: {
    displayLg: {
      fontSize: "32px",
      fontWeight: 500,
      lineHeight: "40px",
      letterSpacing: "-1%",
    },
    displayMd: {
      fontSize: "26px",
      fontWeight: 500,
      lineHeight: "34px",
      letterSpacing: "-1%",
    },
    headingLg: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "32px",
      letterSpacing: "-1%",
    },
    headingMd: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "28px",
      letterSpacing: "-1%",
    },
    headingSm: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "-1%",
    },
    textXl: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "26px",
      letterSpacing: "-1%",
    },
    textLg: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "-1%",
    },
    textMd: {
      fontSize: "15px",
      fontWeight: 500,
      lineHeight: "23px",
      letterSpacing: "-1%",
    },
    textSm: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "-1%",
    },
    textXs: {
      fontSize: "13px",
      fontWeight: 500,
      lineHeight: "21px",
      letterSpacing: "-1%",
    },
    textXlRegular: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "26px",
      letterSpacing: "-1%",
    },
    textLgRegular: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "-1%",
    },
    textMdRegular: {
      fontSize: "15px",
      fontWeight: 500,
      lineHeight: "23px",
      letterSpacing: "-1%",
    },
    textSmRegular: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "-1%",
    },
    textXsRegular: {
      fontSize: "13px",
      fontWeight: 500,
      lineHeight: "21px",
      letterSpacing: "-1%",
    },
  },
});
