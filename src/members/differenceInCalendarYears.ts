import { differenceInCalendarYears as _differenceInCalendarYears } from "date-fns";
import { reactify } from "@vueuse/shared";

export const differenceInCalendarYears = reactify(_differenceInCalendarYears);