import { lastDayOfYear as _lastDayOfYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const lastDayOfYear = reactify(_lastDayOfYear);