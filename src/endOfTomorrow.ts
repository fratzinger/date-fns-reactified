import { endOfTomorrow as _endOfTomorrow } from "date-fns";
import { reactify } from "@vueuse/core";

export const endOfTomorrow = reactify(_endOfTomorrow);