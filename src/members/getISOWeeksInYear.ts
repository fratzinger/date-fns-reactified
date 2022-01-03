import { getISOWeeksInYear as _getISOWeeksInYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getISOWeeksInYear = reactify(_getISOWeeksInYear);