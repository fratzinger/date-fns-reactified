import { daysToWeeks as _daysToWeeks } from "date-fns";
import { reactify } from "@vueuse/shared";

export const daysToWeeks = reactify(_daysToWeeks);