import { isLastDayOfMonth as _isLastDayOfMonth } from "date-fns";
import { reactify } from "@vueuse/core";

export const isLastDayOfMonth = reactify(_isLastDayOfMonth);