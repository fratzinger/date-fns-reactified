import { eachWeekendOfMonth as _eachWeekendOfMonth } from "date-fns";
import { reactify } from "@vueuse/core";

export const eachWeekendOfMonth = reactify(_eachWeekendOfMonth);