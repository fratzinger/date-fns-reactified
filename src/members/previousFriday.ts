import { previousFriday as _previousFriday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const previousFriday = reactify(_previousFriday);