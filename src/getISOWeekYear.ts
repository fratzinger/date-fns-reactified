import { getISOWeekYear as _getISOWeekYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const getISOWeekYear = reactify(_getISOWeekYear);