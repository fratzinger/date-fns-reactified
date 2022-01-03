import { getYear as _getYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const getYear = reactify(_getYear);