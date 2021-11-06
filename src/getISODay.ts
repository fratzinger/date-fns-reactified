import { getISODay as _getISODay } from "date-fns";
import { reactify } from "@vueuse/core";

export const getISODay = reactify(_getISODay);