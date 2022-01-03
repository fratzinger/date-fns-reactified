import { previousFriday as _previousFriday } from "date-fns";
import { reactify } from "@vueuse/core";

export const previousFriday = reactify(_previousFriday);