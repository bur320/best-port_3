import Contact from "@/app/(web-layout)/contact/page";
import About from "@/app/(web-layout)/about/page";
import { Work } from "@mui/icons-material";
import Services from "@/app/(web-layout)/services/page";
import Blog from "@/app/(web-layout)/blog/page";
import HouseIcon from "@mui/icons-material/House";
import Person2Icon from "@mui/icons-material/Person2";
import DraftsIcon from "@mui/icons-material/Drafts";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import ArticleIcon from "@mui/icons-material/Article";
import Location from "@/app/(web-layout)/location/page";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: <About />,
    icon: <HouseIcon />,
  },
  {
    path: "/about",
    name: "About",
    component: <About />,
    icon: <Person2Icon />,
  },

  {
    path: "/work",
    name: "Work",
    component: <Work />,
    icon: <GroupWorkIcon />,
  },
  {
    path: "/services",
    name: "Services",
    component: <Services />,
    icon: <HomeRepairServiceIcon />,
  },
  {
    path: "/blog",
    name: "Blog",
    component: <Blog />,
    icon: <ArticleIcon />,
  },
  {
    path: "/location",
    name: "Location",
    component: <Location />,
    icon: <LocationOnIcon />,
  },
  {
    path: "/contact",
    name: "Contact",
    component: <Contact />,
    icon: <DraftsIcon />,
  },
];
