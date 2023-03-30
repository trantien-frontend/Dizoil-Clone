import { initCouterUp } from "./utils/countUp";
import { initPercent } from "./utils/percent";
import { wow } from "./utils/wow";

(() => {
  initPercent(".about-us-6");
  initCouterUp(".about-us-5");
  wow.init();
})();
