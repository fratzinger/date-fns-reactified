import { lastDayOfQuarter as _lastDayOfQuarter } from "date-fns";
import { reactify } from "@vueuse/core";

export const lastDayOfQuarter = reactify(_lastDayOfQuarter);