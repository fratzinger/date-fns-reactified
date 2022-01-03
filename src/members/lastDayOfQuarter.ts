import { lastDayOfQuarter as _lastDayOfQuarter } from "date-fns";
import { reactify } from "@vueuse/shared";

export const lastDayOfQuarter = reactify(_lastDayOfQuarter);