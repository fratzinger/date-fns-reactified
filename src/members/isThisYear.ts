import { isThisYear as _isThisYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const isThisYear = reactify(_isThisYear);