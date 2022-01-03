import { nextSunday as _nextSunday } from "date-fns";
import { reactify } from "@vueuse/core";

export const nextSunday = reactify(_nextSunday);