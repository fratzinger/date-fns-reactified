import { eachWeekendOfMonth as _eachWeekendOfMonth } from "date-fns";
import { reactify } from "@vueuse/shared";

export const eachWeekendOfMonth = reactify(_eachWeekendOfMonth);