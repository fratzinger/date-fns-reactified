import { isFirstDayOfMonth as _isFirstDayOfMonth } from "date-fns";
import { reactify } from "@vueuse/core";

export const isFirstDayOfMonth = reactify(_isFirstDayOfMonth);