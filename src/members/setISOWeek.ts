import { setISOWeek as _setISOWeek } from "date-fns";
import { reactify } from "@vueuse/shared";

export const setISOWeek = reactify(_setISOWeek);