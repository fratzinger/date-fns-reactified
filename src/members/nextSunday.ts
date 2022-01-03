import { nextSunday as _nextSunday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const nextSunday = reactify(_nextSunday);