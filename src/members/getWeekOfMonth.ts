import { getWeekOfMonth as _getWeekOfMonth } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getWeekOfMonth = reactify(_getWeekOfMonth);