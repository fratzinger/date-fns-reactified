import { getYear as _getYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getYear = reactify(_getYear);