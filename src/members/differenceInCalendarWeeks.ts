import { differenceInCalendarWeeks as _differenceInCalendarWeeks } from "date-fns";
import { reactify } from "@vueuse/core";

export const differenceInCalendarWeeks = reactify(_differenceInCalendarWeeks);