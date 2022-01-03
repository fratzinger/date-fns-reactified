import { isLeapYear as _isLeapYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isLeapYear = reactify(_isLeapYear);