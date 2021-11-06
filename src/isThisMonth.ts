import { isThisMonth as _isThisMonth } from "date-fns";
import { reactify } from "@vueuse/core";

export const isThisMonth = reactify(_isThisMonth);