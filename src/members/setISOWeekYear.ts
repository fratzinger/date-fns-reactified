import { setISOWeekYear as _setISOWeekYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const setISOWeekYear = reactify(_setISOWeekYear);