import { monthsToYears as _monthsToYears } from "date-fns";
import { reactify } from "@vueuse/shared";

export const monthsToYears = reactify(_monthsToYears);