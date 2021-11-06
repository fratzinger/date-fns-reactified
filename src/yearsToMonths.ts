import { yearsToMonths as _yearsToMonths } from "date-fns";
import { reactify } from "@vueuse/core";

export const yearsToMonths = reactify(_yearsToMonths);