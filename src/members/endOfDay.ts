import { endOfDay as _endOfDay } from "date-fns";
import { reactify } from "@vueuse/shared";

export const endOfDay = reactify(_endOfDay);