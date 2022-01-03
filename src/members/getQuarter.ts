import { getQuarter as _getQuarter } from "date-fns";
import { reactify } from "@vueuse/core";

export const getQuarter = reactify(_getQuarter);