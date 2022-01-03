import { isFirstDayOfMonth as _isFirstDayOfMonth } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isFirstDayOfMonth = reactify(_isFirstDayOfMonth);