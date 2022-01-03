import { getDaysInMonth as _getDaysInMonth } from "date-fns";
import { reactify } from "@vueuse/core";

export const getDaysInMonth = reactify(_getDaysInMonth);