import { yearsToMonths as _yearsToMonths } from "date-fns";
import { reactify } from "@vueuse/shared";

export const yearsToMonths = reactify(_yearsToMonths);