import { getWeek as _getWeek } from "date-fns";
import { reactify } from "@vueuse/core";

export const getWeek = reactify(_getWeek);