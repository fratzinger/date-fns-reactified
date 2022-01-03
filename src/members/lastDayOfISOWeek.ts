import { lastDayOfISOWeek as _lastDayOfISOWeek } from "date-fns";
import { reactify } from "@vueuse/shared";

export const lastDayOfISOWeek = reactify(_lastDayOfISOWeek);