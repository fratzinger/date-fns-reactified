import { getDaysInMonth as _getDaysInMonth } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getDaysInMonth = reactify(_getDaysInMonth);