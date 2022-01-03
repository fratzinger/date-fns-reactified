import { getMilliseconds as _getMilliseconds } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getMilliseconds = reactify(_getMilliseconds);