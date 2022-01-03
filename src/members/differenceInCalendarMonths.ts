import { differenceInCalendarMonths as _differenceInCalendarMonths } from "date-fns";
import { reactify } from "@vueuse/shared";

export const differenceInCalendarMonths = reactify(_differenceInCalendarMonths);