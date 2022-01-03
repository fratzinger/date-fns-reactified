import { differenceInCalendarQuarters as _differenceInCalendarQuarters } from "date-fns";
import { reactify } from "@vueuse/core";

export const differenceInCalendarQuarters = reactify(_differenceInCalendarQuarters);