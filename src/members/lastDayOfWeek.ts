import { lastDayOfWeek as _lastDayOfWeek } from "date-fns";
import { reactify } from "@vueuse/core";

export const lastDayOfWeek = reactify(_lastDayOfWeek);