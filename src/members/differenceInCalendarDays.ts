import { differenceInCalendarDays as _differenceInCalendarDays } from "date-fns";
import { reactify } from "@vueuse/shared";

export const differenceInCalendarDays = reactify(_differenceInCalendarDays);