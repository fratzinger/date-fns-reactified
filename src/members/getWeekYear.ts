import { getWeekYear as _getWeekYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getWeekYear = reactify(_getWeekYear);