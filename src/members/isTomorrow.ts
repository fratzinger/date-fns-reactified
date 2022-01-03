import { isTomorrow as _isTomorrow } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isTomorrow = reactify(_isTomorrow);