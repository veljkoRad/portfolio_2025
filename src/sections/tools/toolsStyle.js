export const badge = (theme) => ({
  background: theme.palette.primary.main,
  borderRadius: "12px",
  width: "80px",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "default",
  transition: "all 0.3s ease 0s",
  border: `1px solid rgba(59, 130, 246, 0.3)`,
  "&:hover": {
    borderColor: theme.palette.primary.main,
  },
});

export const badgeWrapper = (theme) => ({
  position: "relative",
  "&:hover .cloudTooltip": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const cloudTooltip = (theme) => ({
  position: "absolute",
  bottom: "calc(100% + 10px)",
  left: "50%",
  transform: "translateX(-50%) translateY(4px)",
  opacity: 0,
  transition: "opacity 0.2s ease, transform 0.2s ease",
  zIndex: 10,
  padding: "8px 14px",
  background:
    theme.palette.mode === "light" ? "#fff" : theme.palette.primary.main,
  color: theme.palette.text.primary,
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  whiteSpace: "nowrap",
  fontWeight: 600,
  fontSize: "14px",
  "&::after": {
    content: '""',
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
  },
});
