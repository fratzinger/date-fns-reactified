import { isThisSecond as _isThisSecond } from "date-fns";
import { reactify } from "@vueuse/core";

export const isThisSecond = reactify(_isThisSecond);