import { getDecade as _getDecade } from "date-fns";
import { reactify } from "@vueuse/core";

export const getDecade = reactify(_getDecade);