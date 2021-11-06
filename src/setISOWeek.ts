import { setISOWeek as _setISOWeek } from "date-fns";
import { reactify } from "@vueuse/core";

export const setISOWeek = reactify(_setISOWeek);