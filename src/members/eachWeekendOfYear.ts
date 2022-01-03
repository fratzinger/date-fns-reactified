import { eachWeekendOfYear as _eachWeekendOfYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const eachWeekendOfYear = reactify(_eachWeekendOfYear);