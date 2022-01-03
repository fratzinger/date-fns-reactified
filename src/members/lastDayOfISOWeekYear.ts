import { lastDayOfISOWeekYear as _lastDayOfISOWeekYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const lastDayOfISOWeekYear = reactify(_lastDayOfISOWeekYear);