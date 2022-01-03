import { endOfToday as _endOfToday } from "date-fns";
import { reactify } from "@vueuse/core";

export const endOfToday = reactify(_endOfToday);