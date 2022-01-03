import { endOfISOWeek as _endOfISOWeek } from "date-fns";
import { reactify } from "@vueuse/shared";

export const endOfISOWeek = reactify(_endOfISOWeek);