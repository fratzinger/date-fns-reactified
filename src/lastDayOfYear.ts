import { lastDayOfYear as _lastDayOfYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const lastDayOfYear = reactify(_lastDayOfYear);