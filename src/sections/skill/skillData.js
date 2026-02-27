import PhonelinkIcon from "@mui/icons-material/Phonelink";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import SmartToyIcon from "@mui/icons-material/SmartToy";

export const skills = [
  {
    icon: (
      <PhonelinkIcon
        className="iconHover"
        sx={{ fontSize: "54px", color: { xs: "#fff", sm: "#3b82f6" } }}
      />
    ),
    title: "Landing Pages",
    desc: (
      <>
        {" "}
        I build fast, focused pages using <strong>HTML</strong>,{" "}
        <strong>CSS</strong>, and <strong>JavaScript</strong>. Most of my work
        is centered around signup flows, form logic, and clean structure that
        keeps things simple and effective.
      </>
    ),
  },
  {
    icon: (
      <LanguageOutlinedIcon
        className="iconHover"
        sx={{ fontSize: "54px", color: { xs: "#fff", sm: "#3b82f6" } }}
      />
    ),
    title: "Blog Websites",
    desc: (
      <>
        I create responsive blog websites with <strong>React</strong> and
        connect them to <strong>WordPress</strong> as a content backend. This
        setup keeps the frontend modern while making content easy to
        manage.{" "}
      </>
    ),
  },
  {
    icon: (
      <SmartToyIcon
        className="iconHover"
        sx={{ fontSize: "54px", color: { xs: "#fff", sm: "#3b82f6" } }}
      />
    ),
    title: "Vibe Coding",
    desc: (
      <>
        In Vibe Coding I build multi‑landing setups with <strong>Astro</strong>,{" "}
        {""}
        <strong>GitHub</strong> and <strong>Vercel</strong>. All pages share the
        same headers, footers, forms, validations and legal content, and I use{" "}
        <strong>AI</strong> {""}
        to move faster while manually checking for bugs and UI issues.
      </>
    ),
  },
  {
    icon: (
      <EmailOutlinedIcon
        className="iconHover"
        sx={{ fontSize: "54px", color: { xs: "#fff", sm: "#3b82f6" } }}
      />
    ),
    title: "Email Templates",
    desc: (
      <>
        {" "}
        I design and code email templates using <strong>
          table-based
        </strong>{" "}
        layouts to ensure they work everywhere. Tested across{" "}
        <strong>Gmail</strong>, <strong>Outlook</strong>, and older email
        clients where consistency really matters.
      </>
    ),
  },

  {
    icon: (
      <LibraryBooksOutlinedIcon
        className="iconHover"
        sx={{ fontSize: "54px", color: { xs: "#fff", sm: "#3b82f6" } }}
      />
    ),
    title: "WordPress Pages",
    desc: (
      <>
        {" "}
        I maintain and build larger <strong>WordPress</strong> websites,
        including <strong>custom themes</strong> and backend usage. Comfortable
        working with <strong>PHP</strong> basics, plugins, and using WordPress
        beyond just page builders.
      </>
    ),
  },
  {
    icon: (
      <WorkOutlineOutlinedIcon
        className="iconHover"
        sx={{ fontSize: "54px", color: { xs: "#fff", sm: "#3b82f6" } }}
      />
    ),
    title: "Marketing Developer",
    desc: (
      <>
        {" "}
        I understand how users think, where to place{" "}
        <strong>calls to action</strong>, and how to guide attention. My work
        combines <strong>frontend</strong> skills with strong{" "}
        <strong>SEO</strong> and conversion-focused structure.
      </>
    ),
  },
];
