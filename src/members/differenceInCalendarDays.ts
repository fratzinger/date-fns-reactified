import { differenceInCalendarDays as _differenceInCalendarDays } from "date-fns";
import { reactify } from "@vueuse/core";

export const differenceInCalendarDays = reactify(_differenceInCalendarDays);