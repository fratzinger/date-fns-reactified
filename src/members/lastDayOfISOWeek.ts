import { lastDayOfISOWeek as _lastDayOfISOWeek } from "date-fns";
import { reactify } from "@vueuse/core";

export const lastDayOfISOWeek = reactify(_lastDayOfISOWeek);