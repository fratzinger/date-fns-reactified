import { endOfWeek as _endOfWeek } from "date-fns";
import { reactify } from "@vueuse/core";

export const endOfWeek = reactify(_endOfWeek);