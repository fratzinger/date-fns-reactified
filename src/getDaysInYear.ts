import { getDaysInYear as _getDaysInYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const getDaysInYear = reactify(_getDaysInYear);