import { differenceInCalendarISOWeekYears as _differenceInCalendarISOWeekYears } from "date-fns";
import { reactify } from "@vueuse/core";

export const differenceInCalendarISOWeekYears = reactify(_differenceInCalendarISOWeekYears);