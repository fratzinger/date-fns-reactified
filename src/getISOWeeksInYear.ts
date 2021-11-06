import { getISOWeeksInYear as _getISOWeeksInYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const getISOWeeksInYear = reactify(_getISOWeeksInYear);