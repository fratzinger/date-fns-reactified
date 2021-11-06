import { lastDayOfMonth as _lastDayOfMonth } from "date-fns";
import { reactify } from "@vueuse/core";

export const lastDayOfMonth = reactify(_lastDayOfMonth);