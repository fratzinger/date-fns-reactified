import { getISOWeek as _getISOWeek } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getISOWeek = reactify(_getISOWeek);