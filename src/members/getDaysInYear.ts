import { getDaysInYear as _getDaysInYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getDaysInYear = reactify(_getDaysInYear);