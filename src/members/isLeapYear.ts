import { isLeapYear as _isLeapYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const isLeapYear = reactify(_isLeapYear);