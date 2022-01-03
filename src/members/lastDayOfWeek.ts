import { lastDayOfWeek as _lastDayOfWeek } from "date-fns";
import { reactify } from "@vueuse/shared";

export const lastDayOfWeek = reactify(_lastDayOfWeek);