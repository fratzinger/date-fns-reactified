import { differenceInCalendarYears as _differenceInCalendarYears } from "date-fns";
import { reactify } from "@vueuse/core";

export const differenceInCalendarYears = reactify(_differenceInCalendarYears);