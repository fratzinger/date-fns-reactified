import { startOfWeekYear as _startOfWeekYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const startOfWeekYear = reactify(_startOfWeekYear);