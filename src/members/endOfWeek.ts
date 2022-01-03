import { endOfWeek as _endOfWeek } from "date-fns";
import { reactify } from "@vueuse/shared";

export const endOfWeek = reactify(_endOfWeek);