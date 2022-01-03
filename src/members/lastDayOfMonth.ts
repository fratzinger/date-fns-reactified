import { lastDayOfMonth as _lastDayOfMonth } from "date-fns";
import { reactify } from "@vueuse/shared";

export const lastDayOfMonth = reactify(_lastDayOfMonth);