import { startOfTomorrow as _startOfTomorrow } from "date-fns";
import { reactify } from "@vueuse/shared";

export const startOfTomorrow = reactify(_startOfTomorrow);