import { yearsToQuarters as _yearsToQuarters } from "date-fns";
import { reactify } from "@vueuse/core";

export const yearsToQuarters = reactify(_yearsToQuarters);