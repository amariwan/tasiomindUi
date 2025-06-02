import type { IconType } from "react-icons";
import { BsImageAlt, BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import {
  FaAws,
  FaBloggerB,
  FaDiscord,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaNodeJs,
  FaUserNinja,
  FaUserSecret,
  FaVuejs,
  FaXTwitter,
} from "react-icons/fa6";
import {
  HiArrowRight,
  HiArrowTopRightOnSquare,
  HiArrowUpRight,
  HiCalendarDays,
  HiCheck,
  HiCheckCircle,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiChevronUp,
  HiClipboard,
  HiEnvelope,
  HiExclamationCircle,
  HiExclamationTriangle,
  HiHome,
  HiInformationCircle,
  HiMiniAcademicCap,
  HiMiniGlobeAsiaAustralia,
  HiMiniMagnifyingGlass,
  HiMiniMinus,
  HiMiniPlus,
  HiMiniQuestionMarkCircle,
  HiMiniXMark,
  HiOutlineArrowPath,
  HiOutlineDocument,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineLink,
} from "react-icons/hi2";
import { LuChevronsLeftRight, LuMaximize } from "react-icons/lu";
import {
  PiBookBookmarkDuotone,
  PiGridFourDuotone,
  PiRocketLaunchDuotone,
  PiSparkleDuotone,
  PiUserCircleDuotone,
} from "react-icons/pi";
import {
  SiAngular,
  SiBitbucket,
  SiCheckmk,
  SiDart,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFlutter,
  SiGit,
  SiGitlab,
  SiGo,
  SiGooglecloud,
  SiGraphql,
  SiInfluxdb,
  SiIobroker,
  SiIonic,
  SiJavascript,
  SiKeycloak,
  SiKubernetes,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodered,
  SiNuxtdotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSass, // Für MQTT als Fallback
  SiSecurityscorecard,
  SiSwift,
  SiTerraform,
  SiTypescript,
  SiZigbee,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export const iconLibrary: Record<string, IconType> = {
  // Bestehende Icons
  "chevronUp": HiChevronUp,
  "chevronDown": HiChevronDown,
  "chevronRight": HiChevronRight,
  "chevronLeft": HiChevronLeft,
  "chevronsLeftRight": LuChevronsLeftRight,
  "refresh": HiOutlineArrowPath,
  "arrowUpRight": HiArrowUpRight,
  "check": HiCheck,
  "arrowRight": HiArrowRight,
  "helpCircle": HiMiniQuestionMarkCircle,
  "infoCircle": HiInformationCircle,
  "warningTriangle": HiExclamationTriangle,
  "errorCircle": HiExclamationCircle,
  "checkCircle": HiCheckCircle,
  "email": HiEnvelope,
  "blog": FaBloggerB,
  "globe": HiMiniGlobeAsiaAustralia,
  "person": PiUserCircleDuotone,
  "userNinja": FaUserNinja,
  "grid": PiGridFourDuotone,
  "book": PiBookBookmarkDuotone,
  "close": HiMiniXMark,
  "openLink": HiOutlineLink,
  "calendar": HiCalendarDays,
  "home": HiHome,
  "academicCap": HiMiniAcademicCap,
  "gallery": BsImageAlt,
  "discord": FaDiscord,
  "google": FaGoogle,
  "github": FaGithub,
  "minus": HiMiniMinus,
  "plus": HiMiniPlus,
  "eye": HiOutlineEye,
  "eyeOff": HiOutlineEyeSlash,
  "linkedin": FaLinkedin,
  "x": FaXTwitter,
  "clipboard": HiClipboard,
  "arrowUpRightFromSquare": HiArrowTopRightOnSquare,
  "dark": BsMoonStarsFill,
  "light": BsSunFill,
  "document": HiOutlineDocument,
  "search": HiMiniMagnifyingGlass,
  "sparkle": PiSparkleDuotone,
  "maximize": LuMaximize,
  "rocket": PiRocketLaunchDuotone,

  // Icons für Tools
  "nextjs": SiNextdotjs,
  "nuxt": SiNuxtdotjs,
  "angular": SiAngular,
  "vanillaJs": SiJavascript, // Fallback
  "knockoutjs": SiJavascript, // Fallback
  "jquery": SiJavascript, // Fallback
  "scss": SiSass,
  "nestjs": SiNestjs,
  "express": SiExpress,
  "graphql": SiGraphql,
  "python": SiPython, // Auch als Tool verwendet
  "golang": SiGo,
  "laravel": SiLaravel,
  ".net": SiDotnet,
  "ionic": SiIonic,
  "reactNative": SiReact,
  "flutter": SiFlutter,
  "docker": SiDocker,
  "kubernetes": SiKubernetes,
  "terraform": SiTerraform,
  "googleCloud": SiGooglecloud,
  "git": SiGit,
  "gitlab": SiGitlab,
  "bitbucket": SiBitbucket,
  "postgresql": SiPostgresql,
  "mongodb": SiMongodb,
  "redis": SiRedis,
  "influxdb": SiInfluxdb,
  "timescaledb": SiPostgresql, // Fallback
  "mysql": SiMysql,
  "mqtt": SiNodered, // Fallback für IoT-Protokolle
  "scada": SiJavascript, // Kein spezifisches Icon, Fallback
  "iot": SiJavascript, // Fallback
  "networkSecurity": SiSecurityscorecard, // Fallback
  "serverless": SiGooglecloud, // Fallback
  "aws": FaAws, // Fallback
  "awsLambda": SiGooglecloud, // Fallback
  "Keycloak": SiKeycloak, // Fallback
  "Vuejs": FaVuejs, // Fallback
  "Azure": VscAzure, // Fallback
  "Zigbee": SiZigbee, // Fallback
  "NodeJs": FaNodeJs, // Fallback
  "CheckMK": SiCheckmk, // Fallback
  "ioBroker": SiIobroker, // Fallback
  "cyberSecurity": SiSecurityscorecard, // Fallback
  "userSecret": FaUserSecret, // Fallback

  // Icons für Programmiersprachen
  "javascript": SiJavascript,
  "typescript": SiTypescript,
  "go": SiGo,
  "php": SiPhp,
  "dart": SiDart,
  "swift": SiSwift,
  "sql": SiPostgresql, // Fallback
  "css": SiSass, // Fallback für CSS/SCSS/HTML
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
