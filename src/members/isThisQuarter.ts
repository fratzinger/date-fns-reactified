import { isThisQuarter as _isThisQuarter } from "date-fns";
import { reactify } from "@vueuse/core";

export const isThisQuarter = reactify(_isThisQuarter);