import { getWeeksInMonth as _getWeeksInMonth } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getWeeksInMonth = reactify(_getWeeksInMonth);