import { nextFriday as _nextFriday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const nextFriday = reactify(_nextFriday);