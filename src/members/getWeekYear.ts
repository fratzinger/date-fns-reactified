import { getWeekYear as _getWeekYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const getWeekYear = reactify(_getWeekYear);