import { isThisMonth as _isThisMonth } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isThisMonth = reactify(_isThisMonth);