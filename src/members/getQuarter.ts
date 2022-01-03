import { getQuarter as _getQuarter } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getQuarter = reactify(_getQuarter);