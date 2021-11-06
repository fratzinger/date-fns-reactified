import { differenceInCalendarISOWeeks as _differenceInCalendarISOWeeks } from "date-fns";
import { reactify } from "@vueuse/core";

export const differenceInCalendarISOWeeks = reactify(_differenceInCalendarISOWeeks);