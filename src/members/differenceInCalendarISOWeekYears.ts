import { differenceInCalendarISOWeekYears as _differenceInCalendarISOWeekYears } from "date-fns";
import { reactify } from "@vueuse/shared";

export const differenceInCalendarISOWeekYears = reactify(_differenceInCalendarISOWeekYears);