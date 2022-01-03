import { endOfISOWeekYear as _endOfISOWeekYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const endOfISOWeekYear = reactify(_endOfISOWeekYear);