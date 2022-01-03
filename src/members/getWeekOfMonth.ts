import { getWeekOfMonth as _getWeekOfMonth } from "date-fns";
import { reactify } from "@vueuse/core";

export const getWeekOfMonth = reactify(_getWeekOfMonth);