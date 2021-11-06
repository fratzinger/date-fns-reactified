import { monthsToYears as _monthsToYears } from "date-fns";
import { reactify } from "@vueuse/core";

export const monthsToYears = reactify(_monthsToYears);