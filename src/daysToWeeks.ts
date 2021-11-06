import { daysToWeeks as _daysToWeeks } from "date-fns";
import { reactify } from "@vueuse/core";

export const daysToWeeks = reactify(_daysToWeeks);