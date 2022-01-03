import { differenceInCalendarQuarters as _differenceInCalendarQuarters } from "date-fns";
import { reactify } from "@vueuse/shared";

export const differenceInCalendarQuarters = reactify(_differenceInCalendarQuarters);