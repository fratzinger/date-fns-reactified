import { endOfDay as _endOfDay } from "date-fns";
import { reactify } from "@vueuse/core";

export const endOfDay = reactify(_endOfDay);