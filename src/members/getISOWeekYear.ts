import { getISOWeekYear as _getISOWeekYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getISOWeekYear = reactify(_getISOWeekYear);