import { differenceInCalendarMonths as _differenceInCalendarMonths } from "date-fns";
import { reactify } from "@vueuse/core";

export const differenceInCalendarMonths = reactify(_differenceInCalendarMonths);