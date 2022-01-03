import { differenceInISOWeekYears as _differenceInISOWeekYears } from "date-fns";
import { reactify } from "@vueuse/shared";

export const differenceInISOWeekYears = reactify(_differenceInISOWeekYears);