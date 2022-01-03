import { nextMonday as _nextMonday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const nextMonday = reactify(_nextMonday);