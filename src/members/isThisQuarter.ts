import { isThisQuarter as _isThisQuarter } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isThisQuarter = reactify(_isThisQuarter);