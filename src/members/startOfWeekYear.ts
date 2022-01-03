import { startOfWeekYear as _startOfWeekYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const startOfWeekYear = reactify(_startOfWeekYear);