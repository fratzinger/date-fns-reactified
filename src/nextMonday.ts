import { nextMonday as _nextMonday } from "date-fns";
import { reactify } from "@vueuse/core";

export const nextMonday = reactify(_nextMonday);