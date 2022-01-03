import { monthsToQuarters as _monthsToQuarters } from "date-fns";
import { reactify } from "@vueuse/shared";

export const monthsToQuarters = reactify(_monthsToQuarters);