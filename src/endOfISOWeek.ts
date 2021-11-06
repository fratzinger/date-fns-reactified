import { endOfISOWeek as _endOfISOWeek } from "date-fns";
import { reactify } from "@vueuse/core";

export const endOfISOWeek = reactify(_endOfISOWeek);