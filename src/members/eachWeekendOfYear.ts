import { eachWeekendOfYear as _eachWeekendOfYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const eachWeekendOfYear = reactify(_eachWeekendOfYear);