import { endOfISOWeekYear as _endOfISOWeekYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const endOfISOWeekYear = reactify(_endOfISOWeekYear);