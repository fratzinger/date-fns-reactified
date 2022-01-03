import { yearsToQuarters as _yearsToQuarters } from "date-fns";
import { reactify } from "@vueuse/shared";

export const yearsToQuarters = reactify(_yearsToQuarters);