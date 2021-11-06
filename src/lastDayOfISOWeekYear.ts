import { lastDayOfISOWeekYear as _lastDayOfISOWeekYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const lastDayOfISOWeekYear = reactify(_lastDayOfISOWeekYear);