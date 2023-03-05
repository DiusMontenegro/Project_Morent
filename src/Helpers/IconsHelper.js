import { ReactComponent as heart } from "../assets/icons/heart.svg";
import { ReactComponent as bell } from "../assets/icons/bell.svg";
import { ReactComponent as gear } from "../assets/icons/gear.svg";
import { ReactComponent as search } from "../assets/icons/search.svg";
import { ReactComponent as settings } from "../assets/icons/settings.svg";
import { ReactComponent as chevronDown } from "../assets/icons/chevron_down.svg";
import { ReactComponent as close } from "../assets/icons/close.svg";
import { ReactComponent as swap } from "../assets/icons/swap.svg";
import { ReactComponent as fuel } from "../assets/icons/fuel.svg";
import { ReactComponent as transition } from "../assets/icons/transition.svg";
import { ReactComponent as persons } from "../assets/icons/persons.svg";
import { ReactComponent as burger } from "../assets/icons/burger.svg";
import { ReactComponent as check } from "../assets/icons/check.svg";
import { ReactComponent as sort } from "../assets/icons/sort.svg";
import { ReactComponent as funnel } from "../assets/icons/funnel.svg";

export default function getIcon(iconName) {
  switch (iconName) {
    case "heart":
      return heart;
    case "bell":
      return bell;
    case "gear":
      return gear;
    case "search":
      return search;
    case "settings":
      return settings;
    case "chevron_down":
      return chevronDown;
    case "close":
      return close;
    case "swap":
      return swap;
    case "fuel":
      return fuel;
    case "transition":
      return transition;
    case "persons":
      return persons;
    case "burger":
      return burger;
    case "check":
      return check;
    case "sort":
      return sort;
    case "funnel":
      return funnel
    default:
      return null;
  }
}
