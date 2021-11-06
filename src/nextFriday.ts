import { nextFriday as _nextFriday } from "date-fns";
import { reactify } from "@vueuse/core";

export const nextFriday = reactify(_nextFriday);