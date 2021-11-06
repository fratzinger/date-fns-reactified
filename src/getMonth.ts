import { getMonth as _getMonth } from "date-fns";
import { reactify } from "@vueuse/core";

export const getMonth = reactify(_getMonth);