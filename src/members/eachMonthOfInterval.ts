import { eachMonthOfInterval as _eachMonthOfInterval } from "date-fns";
import { reactify } from "@vueuse/shared";

export const eachMonthOfInterval = reactify(_eachMonthOfInterval);