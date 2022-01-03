import { setISOWeekYear as _setISOWeekYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const setISOWeekYear = reactify(_setISOWeekYear);