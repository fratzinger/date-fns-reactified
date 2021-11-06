import { monthsToQuarters as _monthsToQuarters } from "date-fns";
import { reactify } from "@vueuse/core";

export const monthsToQuarters = reactify(_monthsToQuarters);