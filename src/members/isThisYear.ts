import { isThisYear as _isThisYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isThisYear = reactify(_isThisYear);