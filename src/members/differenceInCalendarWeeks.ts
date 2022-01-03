import { differenceInCalendarWeeks as _differenceInCalendarWeeks } from "date-fns";
import { reactify } from "@vueuse/shared";

export const differenceInCalendarWeeks = reactify(_differenceInCalendarWeeks);