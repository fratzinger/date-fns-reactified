import { getISOWeek as _getISOWeek } from "date-fns";
import { reactify } from "@vueuse/core";

export const getISOWeek = reactify(_getISOWeek);