import { getMonth as _getMonth } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getMonth = reactify(_getMonth);