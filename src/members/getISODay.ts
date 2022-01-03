import { getISODay as _getISODay } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getISODay = reactify(_getISODay);