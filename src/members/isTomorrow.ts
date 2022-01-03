import { isTomorrow as _isTomorrow } from "date-fns";
import { reactify } from "@vueuse/core";

export const isTomorrow = reactify(_isTomorrow);