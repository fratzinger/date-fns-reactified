import { differenceInISOWeekYears as _differenceInISOWeekYears } from "date-fns";
import { reactify } from "@vueuse/core";

export const differenceInISOWeekYears = reactify(_differenceInISOWeekYears);