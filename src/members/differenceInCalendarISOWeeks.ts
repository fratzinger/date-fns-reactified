import { differenceInCalendarISOWeeks as _differenceInCalendarISOWeeks } from "date-fns";
import { reactify } from "@vueuse/shared";

export const differenceInCalendarISOWeeks = reactify(_differenceInCalendarISOWeeks);