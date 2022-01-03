import { endOfToday as _endOfToday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const endOfToday = reactify(_endOfToday);