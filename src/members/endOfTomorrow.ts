import { endOfTomorrow as _endOfTomorrow } from "date-fns";
import { reactify } from "@vueuse/shared";

export const endOfTomorrow = reactify(_endOfTomorrow);