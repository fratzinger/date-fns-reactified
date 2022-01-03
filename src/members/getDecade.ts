import { getDecade as _getDecade } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getDecade = reactify(_getDecade);