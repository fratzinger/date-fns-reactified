import { getWeeksInMonth as _getWeeksInMonth } from "date-fns";
import { reactify } from "@vueuse/core";

export const getWeeksInMonth = reactify(_getWeeksInMonth);