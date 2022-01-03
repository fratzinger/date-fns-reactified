import { isThisSecond as _isThisSecond } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isThisSecond = reactify(_isThisSecond);