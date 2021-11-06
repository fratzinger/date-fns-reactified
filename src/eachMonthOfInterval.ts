import { eachMonthOfInterval as _eachMonthOfInterval } from "date-fns";
import { reactify } from "@vueuse/core";

export const eachMonthOfInterval = reactify(_eachMonthOfInterval);